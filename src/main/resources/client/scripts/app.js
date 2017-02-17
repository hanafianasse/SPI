(function() {
	'use strict';
	var app = angular.module(
			'app',
			[ 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart',
					'mgo-angular-wizard', 'textAngular', 'ui.tree',
					'ngTagsInput']).config(
			[ '$routeProvider', function($routeProvider, $urlRouterProvider) {
				$routeProvider
					.when('/touteslesFormations', {
						templateUrl: 'views/indexFormation.html',
						controller: 'FormationMainCtrl',
						controllerAs: 'Formation'
					})
					.when('/formation/:codeFormation',{
						templateUrl: 'views/InfoFormation.html',
						controller: 'FormationInfoCtrl',
						controllerAs: 'Formation'
					})
					.when('/ajouterFormation',{
						templateUrl: 'views/AjouterFormation.html',
						controller: 'FormationAjouterCtrl',
						controllerAs: 'Formation'
					})
					.when('/update/:codeFormation',{
						templateUrl: 'views/updateFormation.html',
						controller: 'FormationUpdateCtrl',
						controllerAs: 'Formation'
					})
					.when('/touslesEnseignants',{
						templateUrl: 'views/indexEnseignant.html',
						controller: 'EnseignantsMainCtrl',
						controllerAs: 'Enseignants'
					})
					.when('/enseignant/:noEnseignant',{
						templateUrl: 'views/infoEnseignant.html',
						controller: 'EnseignantsInfoCtrl',
						controllerAs: 'Enseignants'
					})
					.when('/ajouterEnseignant',{
						templateUrl: 'views/ajouterEnseignant.html',
						controller: 'EnseignantsAjouterCtrl',
						controllerAs: 'Enseignants'
					})
					.when('/enseignant/update/:noEnseignant',{
						templateUrl: 'views/updateEnseignant.html',
						controller: 'EnseignantUpdateCtrl',
						controllerAs: 'Enseignants'
					});
			} ]
	);
}).call(this);