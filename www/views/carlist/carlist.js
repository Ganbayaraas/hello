angular.module("carlist.Ctrl", []).controller("carlistCtrl", function ($ionicSlideBoxDelegate, $scope) {
  $scope.grid = function () {
    if ($("#changeLayout").hasClass("layout-list")) {
      $("#changeLayout").removeClass("layout-list");
      $("#changeLayout").addClass("layout-grid");

      $("#buttonIcon").removeClass("ion-grid");
      $("#buttonIcon").addClass("ion-navicon");
      document.getElementById("glayout").setAttribute("class", "grid");
      var arr = Array.prototype.slice.call(document.getElementsByClassName("car-detail-column"));
      arr.forEach((element) => {
        element.setAttribute("class", "car-detail-grid");
      });
    } else {
      $("#changeLayout").removeClass("layout-grid");
      $("#changeLayout").addClass("layout-list");

      $("#buttonIcon").removeClass("ion-navicon");
      $("#buttonIcon").addClass("ion-grid");
      document.getElementById("glayout").setAttribute("class", "");
      var arr = Array.prototype.slice.call(document.getElementsByClassName("car-detail-grid"));
      arr.forEach((element) => {
        element.setAttribute("class", "car-detail-column");
      });
    }
  };
});
