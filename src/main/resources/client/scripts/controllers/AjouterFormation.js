angular.module('app')
  .controller('FormationAjouterCtrl', ['$scope','$http','ServiceFormation',function ($scope,$http,ServiceFormation) {


	$scope.formation = {
		codeFormation : "",
		nomFormation : "",
		diplome : "",
		doubleDiplome : "",
		n0Annee : "",
		debutAccreditation : "" ,
		finAccreditation : ""
	}

	$scope.ajouterNouvelleFormation = function(){
		$scope.formation["Content-Type"] = "application/json";
		ServiceFormation.ajouterFormation($scope.formation);
	}
}]);