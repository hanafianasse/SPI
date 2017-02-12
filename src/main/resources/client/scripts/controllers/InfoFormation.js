


'use strict';

angular.module('app')
	.service('ServiceFormation2',[ '$http','$routeParams', function ($http,$routeParams) {
	var codeFormation = $routeParams.codeFormation;
	this.getOneFormation = function(callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
}]);

angular.module('app')
  .controller('FormationInfoCtrl', ['$scope','ServiceFormation2',function ($scope,ServiceFormation2) {

  	$scope.formation = null;
  	ServiceFormation2.getOneFormation(function (data) {
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

}]);