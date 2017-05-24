(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').service('apiService', apiService);
	apiService.$inject = ['$http'];

	function apiService($http) {
		this.loadJson = function() {
			return $http({url: "data/deleted-items.json"});
		};
		
		var proxied = this.loadJson; 

		this.loadJson = function() {
			console.log("Will now load JSON");
			return proxied();
		}
		
	}
})(window.angular)