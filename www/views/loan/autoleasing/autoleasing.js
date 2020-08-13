angular.module("autoleasing.Ctrl", []).controller("autoleasingCtrl", function ($scope, $ionicPlatform) {
  var input = document.getElementById("inputId");
  if (input) {
    console.log("1", input);

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
  }
});
