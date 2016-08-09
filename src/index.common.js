import angular from './angular-g';
import hello from './directive/hello';

const ngModuleName = 'ngemForm';

export default ngModuleName;

const ngModule = angular.module(ngModuleName, []);

ngModule.directive('hello', hello);