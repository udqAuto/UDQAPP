angular.module('udqApp')
    .controller('ownerOrderCtrl', ['$scope', '$ionicPopover', function ($scope, $ionicPopover) {
        // .fromTemplate() method
        var tempOrderItem = {
            id: 0,
            pn:'',
            brand: '',
            time: '',
            washer:''
        };        
        $scope.max = 5;
        $scope.ratingVal = 2;
        $scope.readonly = false;
        $scope.onHover = function (val) {
            $scope.hoverVal = val;
        };
        $scope.onLeave = function () {
            $scope.hoverVal = null;
        }
        $scope.onChange = function (val) {
            $scope.ratingVal = val;
        }
        //获取进行中的订单信息
        $scope.setDoingOrder = function (item) {
            tempOrderItem = item;

            $ionicPopover.fromTemplateUrl('view/showDoingOwnerOrder.html', {
                scope: $scope
            }).then(function (popover) {
                
                $scope.popover = popover;
            });
        }
        //获取已完成的的订单信息
        $scope.setDoneOrder = function (item) {
            tempOrderItem = item;
            $ionicPopover.fromTemplateUrl('view/EditDoneOwnerOrder.html', {
                scope: $scope
            }).then(function (popover) {
                
                $scope.popover = popover;
            });

        }

        $scope.doingOrderItems = [{
            id:1,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer:'御都花园洗车店'
        }, {
            id: 3,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer: '御都花园洗车店'
        },{
            id: 4,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer: '御都花园洗车店'
        }, ];
        $scope.doneOrderItems = [{
            id: 4,
            pn: '川B121212',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer: '御都花园洗车店'
        }, {
            id: 5,
            pn: '川B121212',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer: '御都花园洗车店'
        }, {
            id: 6,
            pn: '川B121212',
            brand: '奥迪',
            time: '2015-7-21:12:00',
            washer: '御都花园洗车店'
        }, ];
    }])