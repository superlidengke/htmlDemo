// Create a new module
var myAppModule = angular.module('myAppModule', []);
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
		return txt.split('-').join(' ');
	};
});

myAppModule.filter("toTitleCase", function() {
	return function(str) {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};
});

// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope) {
	// controller code would go here
	var someData = {
		firstName : 'JENNA',
		surname : 'GRANT',
		dateJoined : new Date(2010, 2, 23),
		consumption : 123.659855,
		plan : 'super-basic-plan',
		// Last 12 months of data usage
		monthlyUsageHistory : [ 123.659855, 89.645222, 97.235644, 129.555555,
				188.699854, 65.652545, 89.6452223, 97.235654, 129.555575,
				129.555556,// will show error if there're same values,need
				// other operation
				188.699855, 65.65254551 ]
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
myAppModule.controller('myDemoCtrl', function($scope) {
	$scope.colorsArray = [ 'red', 'green', 'blue', 'purple', 'olive' ]
});
myAppModule
		.directive(
				'colorList',
				function() {
					return {
						restrict : 'AE',
						template : "<button ng-click='showHideColors()' type='button'>"
								+ "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
								+ "</button><div ng-hide='isHidden' id='colorContainer'>"
								+ "</div>",
						link : function($scope, $element) {
							// set default state of hide/show
							$scope.isHidden = true;
							// add function to manage hide/show state
							$scope.showHideColors = function() {
								$scope.isHidden = !$scope.isHidden;
							}
							// DOM manipulation
							var colorContainer = $element.find('div');
							angular
									.forEach(
											$scope.colorsArray,
											function(color) {
												var appendString = "<div style='background-color:"
														+ color
														+ "'>"
														+ color
														+ "</div>";
												colorContainer
														.append(appendString);
											});
						}
					}
				});

angular.module("myapp", []).controller("MyController", function($scope) {
	var person = {
		firstName : "Jimmy",
		age : 21,
		address : {
			street : '16 Somewhere Drive',
			suburb : 'Port Kennedy',
			state : 'Western Australia'
		}
	}
	$scope.person = person;
});

angular.module("myapp2", []).controller("MyControllerImplict",
		function($scope) {
			$scope.showFirstName = function() {
				if (angular.isDefined($scope.firstName)) {
					alert("Name is: " + $scope.firstName);
				} else {
					alert("Name is empty, please enter a value");
				}
			}
		});

angular.module("myapp9", []).controller("MyController9", function($scope) {
	var person = {};
	person.newsletterOptIn = false;
	person.channels = [ {
		value : "television",
		label : "Television"
	}, {
		value : "radio",
		label : "Radio"
	}, {
		value : "social-media",
		label : "Social Media"
	}, {
		value : "other",
		label : "Other"
	} ];
	person.register = function() {
		// <!-- pending implementation -->
		$scope.firstNameInvalid = false;
		$scope.lastNameInvalid = false;
		if (!$scope.registrationForm.firstName.$valid) {
			$scope.firstNameInvalid = true;
		}
		if (!$scope.registrationForm.lastName.$valid) {
			$scope.lastNameInvalid = true;
		}
		if (!$scope.registrationForm.email.$valid) {
			$scope.emailInvalid = true;
		}
		if (!$scope.registrationForm.research.$valid) {
			$scope.researchInvalid = true;
		}
		if ($scope.registrationForm.$valid) {
			// <!-- pending implementation -->
			$scope.doShow = true;
		}
	}
	$scope.person = person;
});