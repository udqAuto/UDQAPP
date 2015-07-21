angular.module('udqApp')
    .controller('ownerMenuCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.goToOwnerCenter = function () {
            $ionicHistory.clearHistory();
            $state.go('ownerCenter');
        };
        $scope.goToOrder = function () {
            $ionicHistory.clearHistory();
            $state.go('ownerOrder');
        };
    }])