'use strict';

angular.module('app')
  .controller('EnseignantUpdateCtrl', ['$scope','$routeParams','ServiceEnseignant',function ($scope,$routeParams,ServiceEnseignant) {

  	var noEnseignant = $routeParams.noEnseignant;
	ServiceEnseignant.getOneEnseignant(noEnseignant,function (data) {
		$scope.enseignant = data;
		console.log("je suis la " + $scope.enseignant.noEnseignant);
	});

	$scope.sexe = "";
	$scope.RadioChange = function(s) {
		$scope.enseignant.sexe = s;
	};

	$scope.updateEnseignant = function(){
		$scope.enseignant["Content-Type"] = "application/json"
		ServiceEnseignant.updateEnseignant($scope.enseignant);
	};

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