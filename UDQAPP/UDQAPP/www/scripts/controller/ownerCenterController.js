angular.module('udqApp')
    .controller('ownerCenterCtrl', ['$scope', '$ionicHistory', '$state', function ($scope, $ionicHistory, $state) {

        $scope.goToOwnerOrder = function(){
            $ionicHistory.clearHistory();
            $state.go('ownerOrder');
        };
    }])