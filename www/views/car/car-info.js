angular.module("carinfo.Ctrl", []).controller("carinfoCtrl", function ($ionicSlideBoxDelegate, $scope) {
  $scope.payOn = function () {
    document.getElementById("paypopup").style.display = "block";
  };
  $scope.payOff = function () {
    document.getElementById("paypopup").style.display = "none";
  };
  $scope.tabhide = function () {
    document.getElementById("home-tab").style.display = "none";
  };
  $scope.collapse = function () {
    document.getElementById("addition-info").style.display = "block";
    document.getElementById("collapse-btn").style.display = "none";
    document.getElementById("uncollapse-btn").style.display = "block";
  };
  $scope.uncollapse = function () {
    document.getElementById("addition-info").style.display = "none";
    document.getElementById("collapse-btn").style.display = "block";
    document.getElementById("uncollapse-btn").style.display = "none";
  };
  $scope.shouldHide = function () {
    switch ($state.current.name) {
      case "statename1":
        return true;
      case "statename2":
        return true;
      default:
        return false;
    }
  };
});
