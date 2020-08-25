var expandCollapseApp = angular.module("request_list.Ctrl", ["ngAnimate"]);
expandCollapseApp.controller("requestListCtrl", function ($scope, $ionicHistory) {
  $scope.growDiv = function () {
    var grow = document.getElementById("grow");
    if (grow.clientHeight) {
      grow.style.height = 0;
    } else {
      var wrapper = document.querySelector(".measuringWrapper");
      grow.style.height = wrapper.clientHeight + "px";
    }
  };
});
