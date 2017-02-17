'use strict';

angular.module('app')
  .controller('AuthCtrl', ['$scope','AuthService',function ($scope,AuthService) {

  	$scope.connect = function(){
  		var user = {
  			userName : $scope.userName,
  			password : $scope.password
  		};
  		AuthService.authLocal(user);
  	}
}]);