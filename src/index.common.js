import angular from './angular-g';
import textfield from './directive/textfield';

const ngModuleName = 'ngemForm';

export default ngModuleName;

const ngModule = angular.module(ngModuleName, []);

ngModule.directive('textfield', textfield);