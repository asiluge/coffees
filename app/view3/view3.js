'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: GetController
  })
  .when('/view3/get/:id', { 
    controller: GetController, 
    templateUrl: "view3/view3.html"
}) ;
}])

.controller('view3Ctrl', [function() {

}])

function GetController($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('../coffees.json').success(function (data) {
      console.log(data);
      $scope.item = data[id];
  });
}
