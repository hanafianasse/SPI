'use strict';

angular.module('app')
  .controller('EnseignantsInfoCtrl', ['$scope','$routeParams','ServiceEnseignant',function ($scope,$routeParams,ServiceEnseignant) {


  	var noEnseignant = $routeParams.noEnseignant;
	ServiceEnseignant.getOneEnseignant(noEnseignant, function (data) {
		$scope.enseignant = data;
		if($scope.enseignant.sexe != null)
		switch($scope.enseignant.sexe) {
			case 'H':
				$scope.enseignant.sexe = "Homme";
			break;
			case 'F':
				$scope.enseignant.sexe = "Femme";
			break;
		}
	});

	$scope.deleteEnseignant = function (noEnseignant) {
		ServiceEnseignant.deleteEnseignant(noEnseignant);
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