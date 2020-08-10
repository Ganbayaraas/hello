angular.module("profile.Ctrl", []).controller("profileCtrl", function ($scope, $ionicPlatform) {
  $scope.overlayOn = function () {
    document.getElementById("overlay").style.display = "block";
  };
  $scope.overlayOff = function () {
    document.getElementById("overlay").style.display = "none";
  };
  $scope.overlayOn();
});
