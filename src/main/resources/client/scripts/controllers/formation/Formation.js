'use strict';

angular.module('app')
  .controller('FormationMainCtrl', ['$scope','ServiceFormation','$rootScope',function ($scope, ServiceFormation,$rootScope) {

	var formation = document.getElementById("formation");
	var enseignant = document.getElementById("enseignant");
	formation.classList.add("sidebarElementOnHover");
	enseignant.classList.remove("sidebarElementOnHover");

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