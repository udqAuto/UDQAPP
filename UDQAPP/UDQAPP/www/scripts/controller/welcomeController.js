angular.module('udqApp')
    .controller('welcomeCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        window.localStorage['firstStartApp'] = false;// For Test

        var startApp = function () {
            $ionicHistory.clearHistory();

            $state.go('login');
            window.localStorage['firstStartApp'] = true;
            };

        if (window.localStorage['firstStartApp'] === "true") {
            console.log('Skip intro'); 
            // 向导页面只显示一次
            startApp();
        } else {
            //setTimeout(function () {
            //    navigator.splashscreen.hide();
            //}, 750);
        }

        $scope.gotoMain = function () {
            startApp();
        };


        $scope.slideHasChanged = function () {
            //不做任何处理
        };
    }])