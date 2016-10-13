(function(){
  'use strict';
  angular
    .module('TmuiGrid')
    .directive('tmuiGrid', tmuiGrid);

  tmuiGrid.$inject = ['$window'];
  function tmuiGrid($window) {
      var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'app/grid/grid.html',
        controllerAs: 'vm',
        scope: {
          items: "=?",
          direction: "=?",
          directionLimit: "=?"
        },
        controller: Controller,
        bindToController: true,
        link: link
      };
      return directive;

      Controller.$inject = ['$scope']
      function Controller($scope, $element, $window) {
        var vm = this;
      }

      function link(scope, el, attrs, ctrl) {
        // scope.vm.items.forEach(item =>
        //   el.find('ul').append(
        //     angular.element(
        //       "<li class='ui-draggable'> <div class='inner'>"+
        //       '<div class="controls">' +
        //       '<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
        //       '<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
        //       '</div>' +
        //       item.type +
        //       '</div> </li>')
        //       .attr({
        //         'data-w': item.w,
        //         'data-h': item.h,
        //         'data-x': item.x,
        //         'data-y': item.y
        //       }))
        // );
        // console.log(2);
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
