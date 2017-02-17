'use strict';

angular.module('app')
  .controller('FormationInfoCtrl', ['$scope','$routeParams','ServiceFormation','$modal',function ($scope,$routeParams,ServiceFormation,$modal) {

	var formation = document.getElementById("formation");
	var enseignant = document.getElementById("enseignant");
	formation.classList.add("sidebarElementOnHover");
	enseignant.classList.remove("sidebarElementOnHover");

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

	$scope.$on('showError', function(event, response) {
		$modal.open({
			templateUrl: 'myModalContent.html',
			backdrop: true,
			controller: function ($scope, $modalInstance) {
				$scope.myError = response.data;
				$scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				};
			},
		});
	});

}]);