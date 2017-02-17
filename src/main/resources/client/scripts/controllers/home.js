'use strict';

angular.module('app')
  .controller('HomeMainCtrl', ['$scope','homeService','AuthService','$location',function ($scope,homeService,AuthService,$location) {


	var formation = document.getElementById("formation");
	var enseignant = document.getElementById("enseignant");
	enseignant.classList.remove("sidebarElementOnHover");
	formation.classList.remove("sidebarElementOnHover");

  	homeService.getNombreEnseignant(function (nombreEnseignant){
  		$scope.nombreEnseignant = nombreEnseignant;
  	});

  	homeService.getNombreFormation(function (nombreFormation){
  		$scope.nombreFormation = nombreFormation;
  	});

  	$scope.deconnexion = function(){
  		var disconnectRequest = AuthService.deconnexion();
  		disconnectRequest.success(function(response) {
			$location.path('/');
		});
		disconnectRequest.error(function(response, status, headers, config) {
			console.log("nop");
		});
	}

	$scope.navBarEtat = "showen";

	$scope.sowhHideSideBar = function(){
		var element = document.getElementById("wrapper");
		if($scope.navBarEtat == 'showen'){
			element.classList.add("toggled");
			$scope.navBarEtat = 'hidden';
		}else{
			element.classList.remove("toggled");
			$scope.navBarEtat = 'showen';
		}
	};
}]);