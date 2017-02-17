'use strict';

angular.module('app')
  .controller('AuthCtrl', ['$scope','AuthService','$location',function ($scope,AuthService,$location) {

	var formation = document.getElementById("formation");
	var enseignant = document.getElementById("enseignant");
	formation.classList.remove("sidebarElementOnHover");
	enseignant.classList.remove("sidebarElementOnHover");

	$scope.connect = function(){
		var authRequest = AuthService.authLocal($scope.user);

		authRequest.success(function(response) {
			console.log("yep");
			$location.path('/Home');
		});
		authRequest.error(function(response, status, headers, config) {
			console.log("nop");
		});
	}

}]);