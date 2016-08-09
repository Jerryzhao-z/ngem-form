import angular from '../angular-g';

function textfield() {
    return {
        restrict: "AE",
        scope: {
            rule: "@",
            label: "@",
            prehold: "@",
            model: "=",
            require: "@",
            minlength: "@",
            maxlength: "@",
        },
        template: "<div class= \"input-group\">" +
            "<span class=\"input-group-addon\" id=\"basic-addon1\">{{label}}</span>" +
            "<input type=\"text\" class=\"form-control\" placeholder=\"{{prehold}}\" " +
            "ng-model=\"model\" aria-describedby=\"basic-addon1\" ng-required=\"require\" " +
            "ng-minlength=\"minlength\" ng-maxlength=\"maxlength\" ng-pattern=\"rule\">" +
            "</div>"
    };
};

export default textfield;