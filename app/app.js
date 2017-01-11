(function(angular) {
    'use strict';
    angular.module('minimalNpmApp', ['ngRoute', 'ngFileSaver', 'ngIdle', 'ui.bootstrap', 'datatables', 'datatables.bootstrap'])
            .config(function($routeProvider) {
                $routeProvider.
					when('/home', {
						controller : 'HomeController',
						templateUrl : 'home/home-view.html'
					}).otherwise({
						redirectTo : '/home'
					});
            });		
})(window.angular)