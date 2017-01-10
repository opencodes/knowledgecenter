# Directives

## What are Directives?

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

- When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

## What does it mean to "compile" an HTML template? 
For AngularJS, "compilation" means attaching directives to the HTML to make it interactive. The reason we use the term "compile" is that the recursive process of attaching directives mirrors the process of compiling source code in compiled programming languages.

### Normalization
Angular normalizes an element's tag and attribute name to determine which elements match which directives. 
- We typically refer to directives by their case-sensitive camelCase normalized name (e.g. ngModel). 
- However, since HTML is case-insensitive, we refer to directives in the DOM by lower-case forms, typically using dash-delimited attributes on DOM elements (e.g. ng-model).

The normalization process is as follows:

- Strip x- and data- from the front of the element/attributes.
- Convert the : , -, or _-delimited name to camelCase.
For example, the following forms are all equivalent and match the ngBind directive:
<div ng-controller="Controller">
  Hello <input ng-model='name'> <hr/>
  <span ng-bind="name"></span> <br/>
  <span ng:bind="name"></span> <br/>
  <span ng_bind="name"></span> <br/>
  <span data-ng-bind="name"></span> <br/>
  <span x-ng-bind="name"></span> <br/>
</div>

Best Practice: Prefer using the dash-delimited format (e.g. ng-bind for ngBind). If you want to use an HTML validating tool, you can instead use the data-prefixed version (e.g. data-ng-bind for ngBind). The other forms shown above are accepted for legacy reasons but we advise you to avoid them.

Directive types
$compile can match directives based on element names, attributes, class names, as well as comments.

Best Practice: Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.
Best Practice: Comment directives were commonly used in places where the DOM API limits the ability to create directives that spanned multiple elements (e.g. inside <table> elements). AngularJS 1.2 introduces ng-repeat-start and ng-repeat-end as a better solution to this problem. Developers are encouraged to use this over custom comment directives when possible.

Creating Directives

To register a directive, you use the module.directive API. module.directive takes the normalized directive name followed by a factory function. This factory function should return an object with the different options to tell $compile how the directive should behave when matched.

Best Practice: In order to avoid collisions with some future standard, it's best to prefix your own directive names. For instance, if you created a <carousel> directive, it would be problematic if HTML7 introduced the same element. A two or three letter prefix (e.g. btfCarousel) works well. Similarly, do not prefix your own directives with ng or they might conflict with directives included in a future version of Angular.
