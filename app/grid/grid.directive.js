(function(){
  'use strict';
  angular
    .module('TmuiGrid')
    .directive('tmuiGrid', tmuiGrid);

  tmuiGrid.$inject = ['$window'];
  function tmuiGrid($window) {
      var directive = {
        restrict: 'E',
        transclude: false,
        templateUrl: 'app/grid/grid.html',
        controllerAs: 'vm',
        scope: {
          items: "=",
          direction: "=",
          directionLimit: "="
        },
        controller: Controller,
        bindToController: true,
        link: link
      };
      return directive;

      Controller.$inject = ['$scope']
      function Controller($scope, $element, $window) {
        var vm = this;
        vm.grid = null;
        vm.moveToPosition = moveToPosition;
        vm.resizeGrid = resizeGrid;

        vm.item3 = {x: 3, y: 15, w: 3, h: 4};

        function moveToPosition() {
        }

        function resizeGrid() {
        }
      }
      function link(scope, el, attrs, ctrl) {
        scope.vm.items.forEach(item =>
          el.find('ul').append(
            angular.element(
              "<li class='ui-draggable'> <div class='inner'>"+
              '<div class="controls">' +
              '<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
              '<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
              '</div>' +
              item.type +
              '</div> </li>')
              .attr({
                'data-w': item.w,
                'data-h': item.h,
                'data-x': item.x,
                'data-y': item.y
              }))
        );

        el.find('ul').gridList({
          lanes: 9,
          widthHeightRatio: 264 / 294,
          heightToFontSizeRatio: 0.25,
          onChange: function(changedItems) {
            console.log(changedItems);
          }
        });
      };
  }
})();
