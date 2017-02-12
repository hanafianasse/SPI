angular.module('app')
  .controller('FormationAjouterCtrl', ['$scope','$http','$templateCache',function ($scope,$http,$templateCache) {

  	$scope.ajouterNouvelleFormation = function(){

/*
		var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}
			$http.post('/ajouter/'+$scope.codeFormation+'/'+$scope.nomFormation+
				'/'+$scope.diplome+'/'+$scope.doubleDiplome+'/'+$scope.n0Annee+
				'/'+$scope.debutAccreditation+'/'+$scope.finAccreditation, config)
			.success(function (status, headers, config) {
				console.log("yes, worked !"+status);
				//$scope.PostDataResponse = data;
			})
			.error(function (status, header, config) {
				//send error
		});*/


	/*
		var url = '/ajouter?codeFormation='+$scope.codeFormation+'&nomFormation='+$scope.nomFormation+
				'&diplome='+$scope.diplome+'&doubleDiplome'+$scope.doubleDiplome+'&n0Annee='+$scope.n0Annee+
				'&debutAccreditation='+$scope.debutAccreditation+'&finAccreditation='+$scope.finAccreditation;
		$http({method: 'POST', url: url, cache: $templateCache})
			.then(function(response) {
				console.log(response);
			}, function(response) {
				console.log(response);
		});
	*/


		var clientUrl = '/ajouter';
		var request = $http({
				method: "post",
				url: clientUrl,
				data: {
					codeFormation  		:	$scope.codeFormation,
					nomFormation		:	$scope.nomFormation,
					diplome				:	$scope.diplome,
					doubleDiplome		:	$scope.doubleDiplome,
					n0Annee				:	$scope.n0Annee,
					debutAccreditation	:	$scope.debutAccreditation,
					finAccreditation	:	$scope.finAccreditation
				}
			});
			request.success(
			function(response) {
				console.log(response);
			}
		);


// end !!
  	}
}]);