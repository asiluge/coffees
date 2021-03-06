'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view2/get/:id', { 
    controller: GetController, 
    templateUrl: "view2/view2.html"
});
}])

.controller('View2Ctrl', [function() {

}]);

function GetController($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get('../coffees.json').success(function (data) {
      console.log(data);
      $scope.item = data[id];
  });
}