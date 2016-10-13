(function(){
  'use strict';
  angular
    .module('TmuiGrid')
    .directive('gridItem', gridItem);

  gridItem.$inject = ['$window'];
  function gridItem($window) {
      var directive = {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
          item: "="
        },
        templateUrl: 'app/grid/gridItem.template.html',
        link: link
      };
      return directive;

    function link(scope, el, attrs, ctrl) {
      el.attr({
          'data-w': scope.item.w,
          'data-h': scope.item.h,
          'data-x': scope.item.x,
          'data-y': scope.item.y
      });

      angular
        .element($window)
        .on('resize', onWindowResize);

      el.parent().gridList({
        lanes: 9,
        widthHeightRatio: 264 / 294,
        heightToFontSizeRatio: 0.25,
        onChange: function(changedItems) {
          console.log(changedItems);
        }
      });

      function onWindowResize() {
        el.parent().gridList('reflow');
      }
    };
  }
})();
