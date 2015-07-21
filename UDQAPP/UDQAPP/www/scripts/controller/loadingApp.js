angular./**
* loadingApp Module
*
* Description
*/
angular.module('udqApp', ['ionic'])
.controller('LoadingApp', ['$scope','$ionicLoading', function($scope,$ionicLoading){
	$scope.show = function(){
		$ionicLoading.show({
			template:'Loading....'
		});
	};

	$scope.hide = function(){
		$ionicLoading.hide();
	};
	$scope.show();
	$scope.hide();
}])