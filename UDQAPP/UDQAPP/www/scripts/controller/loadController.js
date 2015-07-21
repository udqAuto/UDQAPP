angular.module('udqApp')
    .controller('loadCtrl', ['$scope', '$ionicHistory', '$state', function ($scope, $ionicHistory, $state) {
        setTimeout(function () {
            $ionicHistory.clearHistory();
            $state.go('ownerMenu');
        }, 2000);
        

    }])