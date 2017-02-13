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
					});
			} ]
	);
}).call(this);
