'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'view4Ctrl'
  })
  .when('/view4/get/:id', { 
    controller: GetController, 
    templateUrl: "view4/view4.html"
});
}])

.controller('view4Ctrl', [function() {

}]);

function GetController($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('../coffees.json').success(function (data) {
      console.log(data);
      $scope.item = data[id];
  });
}