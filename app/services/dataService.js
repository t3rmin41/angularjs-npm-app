(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').service('DataService', DataService);
	DataService.$inject = ['$http'];

	function DataService($http) {
		this.load = function() {
			return $http({url: "data/data_output.json"});
		};
		
		var proxied = this.load; 

		this.load = function() {
			console.log("Will now load JSON");
			return proxied();
		}
		
	}
})(window.angular)