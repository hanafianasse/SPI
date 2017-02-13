'use strict';

angular.module('app')
  .controller('FormationInfoCtrl', ['$scope','$routeParams','ServiceFormation',function ($scope,$routeParams,ServiceFormation) {

  	$scope.formation = null;
  	var codeFormation = $routeParams.codeFormation;
	ServiceFormation.getOneFormation(codeFormation, function (data) {
		$scope.formation = data;

		switch($scope.formation.diplome) {
			case 'L':
				$scope.formation.diplome = "Licence";
				break;
			case 'M':
				$scope.formation.diplome = "Master";
				break;
			case 'D':
				$scope.formation.diplome = "Doctorat";
				break;
		}
		switch($scope.formation.doubleDiplome) {
			case 'O':
				$scope.formation.doubleDiplome = "Oui";
				break;
			case 'N':
				$scope.formation.doubleDiplome = "Non";
				break;
		}
	});

	$scope.deleteFormation = function(codeFormation){
		ServiceFormation.deleteFormation(codeFormation);
	}

}]);