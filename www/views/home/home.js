angular.module("home.Ctrl", []).controller("homeCtrl", function ($scope, $ionicPlatform, $ionicTabsDelegate, $timeout) {
  console.log("request list");
  $timeout(function () {
    $ionicTabsDelegate.$getByHandle("my-handle").select(1);
  });
});
