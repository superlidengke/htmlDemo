// Create a new module
var myAppModule = angular.module('myAppModule', []);
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
		return txt.split('-').join(' ');
	};
});

myAppModule.filter("toTitleCase", function () {
	return function (str) {
	return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.
	substr(1).toLowerCase();});
	};
	});

// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope) {
	// controller code would go here
	var someData = {
			firstName: 'JENNA',
			surname: 'GRANT',
			dateJoined: new Date(2010, 2, 23),
			consumption: 123.659855,
			plan: 'super-basic-plan',
			// Last 12 months of data usage
			monthlyUsageHistory:
			[123.659855,
			89.645222,
			97.235644,
			129.555555,
			188.699854,
			65.652545,
			89.6452223,
			97.235654,
			129.555575,
			129.555556,//will show error if there're same values,need other operation
			188.699855,
			65.65254551]
			};
			$scope.data = someData;
});
angular.module('myAppModule').controller('myProductDetailCtrl',
		function($scope) {
			// Hide colors by default
			$scope.isHidden = true;
			// a function, placed into the scope, which
			// can toggle the value of the isHidden variable
			$scope.showHideColors = function() {
				$scope.isHidden = !$scope.isHidden;
			}
		});