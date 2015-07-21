angular.module('udqApp', ['ionic'])

    //.run(function ($ionicPlatform) {
    //    $ionicPlatform.ready(function () {
    //        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    //        // for form inputs)
    //        if (window.cordova && window.cordova.plugins.Keyboard) {
    //            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //        }
    //        if (window.StatusBar) {
    //            // org.apache.cordova.statusbar required
    //            StatusBar.styleDefault();
    //        }
    //    });
    //})
 

	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	    $stateProvider
		//首次打开app出现的界面
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'view/welcome.html',
            controller: 'welcomeCtrl'
        })
        //打开app时的启动界面
        .state('load', {
            url: '/load',
            templateUrl: 'view/load.html',
            controller:'loadCtrl'
        })
        //打开app时的启动界面
        .state('signUp', {
            url: '/signUp',
            templateUrl: 'view/signUp.html',
            controller: 'signUpCtrl'
        })
        //车辆管理
        .state('autoInfo', {
            url: '/autoInfo',
            templateUrl: 'view/autoInfo.html',
            controller: 'autoInfoCtrl'
        })
        //编辑车辆信息
        .state('addAutoInfo', {
            url: '/addAutoInfo',
            templateUrl: 'view/addAutoInfo.html',
            controller: 'addAutoInfoCtrl'
        })
        //编辑车主个人信息
        .state('editOwnerInfo', {
            url: '/editOwnerInfo',
            templateUrl: 'view/editOwnerInfo.html',
            controller: 'editOwnerInfoCtrl'
        })
        //车主管理中心
        .state('ownerCenter', {
            url: '/ownerCenter',
            templateUrl: 'view/ownerCenter.html',
            controller: 'ownerCenterCtrl'
        })
        //登录界面
        //login.html
		//path:/view/login.html
		.state('login', {
		    url: '/login',
		    templateUrl: 'view/login.html',
		    controller: 'loginCtrl'
		})
         //主界面
	    .state('ownerMenu', {
	        url: '/ownerMenu',
	        templateUrl: '/view/ownerMenu.html',
            controller:'ownerMenuCtrl'
	    })
        //订单界面
	    .state('ownerOrder', {
	        url: '/ownerOrder',
	        templateUrl: '/view/ownerOrder.html',
	        controller: 'ownerOrderCtrl'
	    });
	    

	    $urlRouterProvider.otherwise('/load');
			
	}])

    .directive('star', function () {
    return {
        template: '<ul class="rating" ng-mouseleave="leave()">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            readonly: '@',
            onHover: '=',
            onLeave: '='
        },
        controller: function ($scope) {
            $scope.ratingValue = $scope.ratingValue || 0;
            $scope.max = $scope.max || 5;
            $scope.click = function (val) {
                if ($scope.readonly && $scope.readonly === 'true') {
                    return;
                }
                $scope.ratingValue = val;
            };
            $scope.over = function (val) {
                $scope.onHover(val);
            };
            $scope.leave = function () {
                $scope.onLeave();
            }
        },
        link: function (scope, elem, attrs) {
            elem.css("text-align", "center");
            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            updateStars();

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
            scope.$watch('max', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    };
});
