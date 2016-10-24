var app = angular.module('myApp', []);
app.controller('UsersCtrl', function($scope, $http) {
    $http.get("users.json")
    .then(function(response) {
        $scope.users = response.data.records;
   		$scope.aUsers = [];
        //Generating array aUsers with structure [id => username]
        for($user in $scope.users){
            $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }
    });
});


app.controller('DepensesCtrl', function($scope, $http) {
    $http.get("depenses.json")
    .then(function(response) {
        $scope.depenses = response.data;
    });
});

