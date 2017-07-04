// Create a new module
var myAppModule = angular.module('myAppModule', []);
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});

// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope) {
	// controller code would go here
});