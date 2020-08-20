angular.module("home.Ctrl", []).controller("homeCtrl", function ($scope, $ionicPlatform, $ionicTabsDelegate, $timeout) {
  console.log("request list");
  $timeout(function () {
    //Default tab select
    $ionicTabsDelegate.select(1, false);
  });
});
