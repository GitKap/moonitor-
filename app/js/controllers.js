'use strict';

/* Controllers */


var moonitorApp = angular.module('moonitorApp', [])
		
		moonitorApp.controller('ajaxController', function($scope, $http, $log)
		{
			$scope.ajaxData={};
			$scope.ajaxData.doClick = function(item, event)
			{
				var responsePromise = $http.get('temp.json')

				//$http({method: 'GET', url: , params: { 'foobar': new Date().getTime() } }).
					
					responsePromise.success(function(data, status, headers, config) 
					{
						$log.debug(data);
						//$scope.ajaxData = data;
						$scope.ajaxData.cpu = data.cpu;
						$scope.ajaxData.total = data.total;
						$scope.ajaxData.idle = data.idle;
					});

					responsePromise.error(function(data, status, headers, config) 
					{
						$log.debug("not good");
					});
			}
		});
