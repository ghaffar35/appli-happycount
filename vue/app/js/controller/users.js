app.controller('UsersCtrl', function($scope, User){
	$scope.newUser = {};
	$scope.records = User.find();
	$scope.addUser = function (){
		$scope.records.push($scope.newUser);
		$scope.newUser = {};
	}
});