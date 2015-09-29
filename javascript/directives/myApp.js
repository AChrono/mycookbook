app.directive('recipes', function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		replace: true,
		templateUrl: 'javascript/directives/myApp.html'
	};
});