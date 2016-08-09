# ngem-form

    > ngem-form is a simple angular1.x library created for simplifying the work I'm doing in Gemalto 

    _Notes_: Thanks for [angular-formly](https://github.com/formly-js/angular-formly), it teaches me a lot

## requirements

*   bootstrap.css

## Installation

```bash
npm install --save ngem-form
```

## list of directives

* textfield: decorated text input

## Usage

add in your principal module
```javascript
var app= angular.module("app", ["ngemForm"]);
```

create a textfield() in html
```html
<textfield></textfield>
```
or as attribute
```html
<div textfield></div>
```

configure a textfield
```html
<textfield  label="< label name >" 
            prehold="< preset text >" 
            model="< data model >"
            require="< true or false >"
            minlength="< number >"
            maxlength="< number >"
            rule="< regex expression >">
            </textfield>
```

