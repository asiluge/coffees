'use strict';

// Declare app level module which depends on views, and components

angular.module('myApp', [
  'ngRoute',
  'myApp.view',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

.otherwise({redirectTo: '/view'});
}])

.controller('myCtrl', function($scope) {

});

function ListController($scope, $http) {
  $http.get('user.json').success(function (data) {
      console.log(data);
      $scope.users = data;
  });
}

function GetController($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('coffees.json').success(function (data) {
      console.log(data);
      $scope.item = data[id];
  });
}