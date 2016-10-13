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
        template: '<li class="ui-draggable"> <div class="inner">'+
        '<div class="controls">' +
        '<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
        '<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
        '<a href="#zoom3" class="resize" data-w="3" data-h="1">3x1</a>' +
        '<a href="#zoom1" class="resize" data-w="1" data-h="2">1x2</a>' +
        '<a href="#zoom2" class="resize" data-w="2" data-h="2">2x2</a>' +
        '</div>' +
        '<ng-transclude></ng-transclude>' +
        '</div> </li>',
        //require: '^tmuiGrid',
        link: link
      // compile: function(tElem, tAttrs){
      //
      //   return {
      //     pre: function(scope, iElem, iAttrs){
      //       console.log('second' + ': pre link');
      //     },
      //     post: function(scope, iElem, iAttrs){
      //       console.log('second' + ': post link');
      //     }
      //   }
      // }
      };
      return directive;

    function link(scope, el, attrs, ctrl) {
      el.attr({
          'data-w': scope.item.w,
          'data-h': scope.item.h,
          'data-x': scope.item.x,
          'data-y': scope.item.y
      });


      //console.log(angular.element("#grid").gridList())
      // angular.element("#grid").gridList({
      //   lanes: 9,
      //   widthHeightRatio: 264 / 294,
      //   heightToFontSizeRatio: 0.25,
      //   onChange: function(changedItems) {
      //     console.log(changedItems);
      //   }
      // });

    };
  }
})();
