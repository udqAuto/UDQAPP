angular.module('udqApp')
    .controller('ownerOrderCtrl', ['$scope', '$ionicPopover', function ($scope, $ionicPopover) {
        // .fromTemplate() method
        var tempOrderItem = {
            id: 0,
            pn:'',
            brand: '',
            time:''
        };
        var template = '';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });
        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };
        $scope.setSport = function (item) {
            tempOrderItem = item;
            var s = tempOrderItem.id + 'fa' + tempOrderItem.brand;
            template = '<ion-popover-view><ion-header-bar> <h1 class="title">订单编号：' + tempOrderItem.id + '</h1> </ion-header-bar> <ion-content> 车牌号：' + tempOrderItem.pn + '  品牌:' + tempOrderItem.brand + '预定清洗时间：' + tempOrderItem.time + ' </ion-content></ion-popover-view>';
        }

        $scope.orderItems = [{
            id:1,
            pn: '川Aed3d12',
            brand: '奥迪',
            time:'2015-7-21:12:00'
        }, {
            id: 2,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00'
        }, {
            id: 3,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00'
        },{
            id: 4,
            pn: '川Aed3d12',
            brand: '奥迪',
            time: '2015-7-21:12:00'
    },];
    }])