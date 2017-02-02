(function(angular) {
	'use strict';
	angular.module('minimalNpmApp').service('DataService', DataService);
	DataService.$inject = ['$http'];

	function DataService($http) {
		this.loadJson = function() {
			return $http({url: "data/data_output.json"});
		};
		
		this.loadCsv = function() {
			return $http({url: "data/data_output.csv"});
		};
		
		var proxied = this.loadJson; 

		this.loadJson = function() {
			console.log("Will now load JSON");
			return proxied();
		}
		
	}
})(window.angular)