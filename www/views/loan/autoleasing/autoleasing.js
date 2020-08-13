angular.module("autoleasing.Ctrl", []).controller("autoleasingCtrl", function ($scope, $ionicPlatform) {
  console.log("1");
  var input = document.getElementById("inputId");
  $scope.clearD = function () {
    input.value = input.value.slice(0, input.value.length - 1);
  };
  $scope.addCode = function (key) {
    input.value = input.value + key;
  };

  $scope.emptyCode = function () {
    input.value = "";
  };
  $scope.emptyCode();
});
