'use strict';

angular.module('app')
  .controller('FormationMainCtrl', ['$scope','ServiceFormation','$rootScope',function ($scope, ServiceFormation,$rootScope) {

  	choixFormations
	var choixFormations = document.getElementById("choixFormations");
	var choixNouvelleFormations = document.getElementById("choixNouvelleFormations");
	choixFormations.classList.add("active");
	choixNouvelleFormations.classList.remove("active");

	$scope.formations = [];
	ServiceFormation.getAllFormation(function (data) {
		$scope.formations = data;
	});

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
	}
}]);