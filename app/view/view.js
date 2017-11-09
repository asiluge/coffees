'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: ListController
  });
}])

function ListController($scope, $http) {
  $http.get('../coffees.json').success(function (data) {
      console.log(data);
      $scope.coffee = data;
  });
}