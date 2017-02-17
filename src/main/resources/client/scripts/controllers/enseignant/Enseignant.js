'use strict';

angular.module('app')
  .controller('EnseignantsMainCtrl', ['$scope','ServiceEnseignant','$rootScope',function ($scope, ServiceEnseignant,$rootScope) {

	$scope.enseignants = [];
	ServiceEnseignant.getAllEnseignant(function (data) {
		$scope.enseignants = data;
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