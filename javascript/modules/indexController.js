app.controller('indexController', ['$scope', function($scope) {
	$scope.recipes = [
	{
		name: 'Bruschetta',
		img: 'image/bruschetta.jpg'
	},
	{
		name: 'Beef Wellington',
		img: 'image/beefwellington.jpg'
	},
	{
		name: 'Tiramisu',
		img: 'image/tiramisu.jpg'
	},
	{
		name: 'Cheesecake',
		img: 'image/cheesecake.jpg'
	}
	];

	$scope.tiramisu = {
		name: 'Tiramisu',
		img: 'image/tiramisu.jpg'
	};
}]);