var app = angular.module('myApp', []);
app.controller('UsersCtrl', function($scope, $http) {
    $http.get("users.json")
    .then(function(response) {
        $scope.users = response.data;
    });
});


app.controller('DepensesCtrl', function($scope, $http) {
    $http.get("depenses.json")
    .then(function(response) {
        $scope.depenses = response.data;
    });
});