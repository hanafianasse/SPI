angular.module('app')
  .controller('FormationAjouterCtrl', ['$scope','$http','ServiceFormation','$modal',function ($scope,$http,ServiceFormation,$modal) {


	var choixFormations = document.getElementById("choixFormations");
	var choixNouvelleFormations = document.getElementById("choixNouvelleFormations");
	choixNouvelleFormations.classList.add("active");
	choixFormations.classList.remove("active");

	$scope.formation = {
		codeFormation : "",
		nomFormation : "",
		diplome : "",
		doubleDiplome : "",
		n0Annee : "",
		debutAccreditation : "" ,
		finAccreditation : ""
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

	$scope.ajouterNouvelleFormation = function(){
		$scope.formation["Content-Type"] = "application/json";
		ServiceFormation.ajouterFormation($scope.formation);
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