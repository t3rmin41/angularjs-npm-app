(function(angular) {
    'use strict';
    angular.module(
            'MinimalNpmApp',
            ['ngRoute', 'ngFileSaver', 'ngIdle', 'ui.bootstrap', 'datatables','datatables.bootstrap'])
            .config([ '$routeProvider', function($routeProvider) {
                $routeProvider.when('/home', {
                  controller : 'HomeController',
                  templateUrl : 'home/home-view.html',
                  controllerAs : "vm"
                }).otherwise({
                    redirectTo : '/home'
                });
            } ])
})(window.angular)