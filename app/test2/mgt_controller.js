var umService = angular.module('UserMgt', ['ngRoute']);

umService.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: ListController,
                templateUrl: 'list.html'
            })
            .when('/get/:id', { 
                controller: GetController, 
                templateUrl: "detail.html"
            }) 
            .otherwise({
                redirectTo: '/'
            });
    }
)

function ListController($scope, $http) {
    $http.get('user.json').success(function (data) {
        console.log(data);
        $scope.users = data;
    });
}

function GetController($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.get('user.json').success(function (data) {
        console.log(data);
        $scope.item = data[id];
    });
}