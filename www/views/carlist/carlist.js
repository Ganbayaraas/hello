angular.module("carlist.Ctrl", []).controller("carlistCtrl", function ($ionicSlideBoxDelegate, $scope) {
  $scope.grid = function () {
    document.getElementById("glayout").setAttribute("class", "grid");
    var arr = Array.prototype.slice.call(document.getElementsByClassName("car-detail-column"));
    arr.forEach((element) => {
      element.setAttribute("class", "car-detail-grid");
    });
    // document.getElementById("layout-icon").setAttribute("class", "ion-grid");
  };
  $scope.column = function () {
    document.getElementById("glayout").setAttribute("class", "");
    var arr = Array.prototype.slice.call(document.getElementsByClassName("car-detail-grid"));
    arr.forEach((element) => {
      element.setAttribute("class", "car-detail-column");
    });
  };
});
