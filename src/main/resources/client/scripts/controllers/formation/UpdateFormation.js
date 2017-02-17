'use strict';

angular.module('app')
  .controller('FormationUpdateCtrl', ['$scope','ServiceFormation','$http','$routeParams',function ($scope,ServiceFormation,$http,$routeParams) {
  	
	var choixFormations = document.getElementById("choixFormations");
	var choixNouvelleFormations = document.getElementById("choixNouvelleFormations");
	choixNouvelleFormations.classList.remove("active");
	choixFormations.classList.remove("active");
	
  	var codeFormation = $routeParams.codeFormation;
  	ServiceFormation.getOneFormation(codeFormation,function (data) {
		$scope.formation = data;
	});

	$scope.updateFormation = function(){
		$scope.formation["Content-Type"] = "application/json"
		ServiceFormation.updateFormation($scope.formation);
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
	}
	
}]);