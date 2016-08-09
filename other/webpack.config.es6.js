/* eslint-env node */
"use strict";
require('argv-set-env')();
const packageJson = require('../package.json');

const here = require('path-here');
const _ = require('lodash');
const webpack = require('webpack');
const deindent = require('deindent');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = getConfig();

function getConfig() {
    let config = getCommonConfig();

    switch (process.env.NODE_ENV) {
        case 'development':
            config = _.merge(config, getDevConfig());
            break;
        case 'production':
            config = _.merge(config, getProdConfig());
            break;
        case 'test':
            config = _.merge(config, getTestConfig());
            break;
        default:
            throw new Error(`NODE_ENV not equal to development, production, or test. It is equal to ${process.env.NODE_ENV}`);
    }
    return config;
}


function getCommonConfig() {
    return {
        context: here('src'),
        entry: './index.js',
        output: {
            libraryTarget: 'umd',
            library: 'ngFormly'
        },
        stats: {
            colors: true,
            reasons: true
        },
        resolve: {
            extensions: ['', '.js'],
            alias: {
                'angular-fix': here('src/angular-fix')
            }
        },
        eslint: {
            emitError: true,
            failOnError: true,
            failOnWarning: false,
            quiet: true
        },
        externals: {
            angular: 'angular'
        }
    };
}

function getDevConfig() {
    return {
        output: {
            filename: 'dist/formly.js'
        },
        module: {
            loaders: [
                getJavaScriptLoader(),
                getHtmlLoader()
            ]
        },
        plugins: getCommonPlugins()
    };
}

function getProdConfig() {
    return {
        output: {
            filename: 'dist/formly.min.js'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                getJavaScriptLoader(),
                getHtmlLoader()
            ]
        },
        plugins: _.union(getCommonPlugins(), [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ])
    };
}

function getTestConfig() {
    const coverage = process.env.COVERAGE === 'true';
    const ci = process.env.CI === 'true';
    return {
        entry: './index.test.js',
        module: {
            loaders: _.flatten([
                coverage ? getCoverageLoaders() : getJavaScriptLoader(),
                getHtmlLoader()
            ])
        },
        plugins: getCommonPlugins(),
        eslint: {
            emitError: ci,
            failOnError: ci
        }
    };

    function getCoverageLoaders() {
        return [{
            test: /\.test\.js$|\.mock\.js$/, // include only mock and test files
            loaders: ['ng-annotate', 'babel', 'eslint?configFile=./other/test.eslintrc'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loaders: ['ng-annotate', 'isparta', 'eslint?configFile=./other/src.eslintrc'],
            exclude: /node_modules|\.test.js$|\.mock\.js$/ // exclude node_modules and test files
        }];
    }
}


function getJavaScriptLoader() {
    return {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel', 'eslint?configFile=./other/src.eslintrc'],
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
    };
}

function getHtmlLoader() {
    return {
        test: /\.html$/,
        loaders: ['raw'],
        exclude: /node_modules/
    };
}

function getCommonPlugins() {
    return _.filter([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify(packageJson.version)
        }),
        process.env.CI ? undefined : new WebpackNotifierPlugin({
            title: 'angular-formly',
            contentImage: here('other/logo/angular-formly-logo-64px.png')
        })
    ]);
}