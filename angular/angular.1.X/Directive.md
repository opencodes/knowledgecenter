```
var app = angular.module('app', []);
	//creating custom directive syntax 
	app.directive("myDir", function() {
		return {
			restrict: "E",
			//define directive type like E = element, A = attribute, C = class, M = comment 
			scope: { //create a new child scope or an isolate scope 
				title: '@' //@ reads the attribute value, //= provides two-way binding, //& works with functions
			},
			template: "<div>{{ myName }}</div>", // define HTML markup 
			templateUrl: 'mytemplate.html', //path to the template, used by the directive 
			replace: true | false, // replace original markup with template yes/no 
			transclude: true | false, // copy original HTML content yes/no 
			controller: function(scope) { //define controller, associated with the directive template //TODO: 
			},
			link: function(scope, element, attrs, controller) {
				//define function, used for DOM manipulation 
				//TODO: 
			}
		}
	});
  ```
