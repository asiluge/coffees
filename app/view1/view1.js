'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view1/get/:id', { 
    controller: GetController, 
    templateUrl: "view1/view1.html"
});
}])

.controller('View1Ctrl', [function() {

}]);

function GetController($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('../coffees.json').success(function (data) {
      console.log(data);
      $scope.item = data[id];
  });
}