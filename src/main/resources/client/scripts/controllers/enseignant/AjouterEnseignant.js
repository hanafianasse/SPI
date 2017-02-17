'use strict';

angular.module('app')
  .controller('EnseignantsAjouterCtrl', ['$scope','ServiceEnseignant','$rootScope','$modal',function ($scope, ServiceEnseignant,$rootScope,$modal) {

	$scope.enseignant = {
		'noEnseignant' : "",
		'nom' : "",
		'prenom' : "",
		'sexe' : "",
		'adresse' : "",
		'codePostal' : "",
		'ville' : "",
		'pays' : "",
		'type' : "",
		'telephone' : "",
		'emailPerso' : "",
		'emailUbo' : "",
		'mobile' : ""
	};
	
	$scope.AjouterEnseignant = function(){
		$scope.enseignant['Content-Type'] = "application/json";
		ServiceEnseignant.AjouterEnseignant($scope.enseignant);
	};

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