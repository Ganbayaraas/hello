angular.module("autoleasing.Ctrl", ["ngAnimate"]).controller("autoleasingCtrl", function ($scope, $ionicPlatform) {
  $scope.growDiv = function () {
    var growDiv = document.getElementById("car-grow");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".car-measuringWrapper");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  };
  var input = document.getElementById("inputId");
  if (input) {
    function addThousandsSeparator(x) {
      retVal = x ? parseFloat(x.replace(/,/g, "")) : 0;
      return retVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $scope.clearD = function () {
      input.value = input.value.slice(0, input.value.length - 1);
    };

    $scope.addCode = function (key) {
      input.value = addThousandsSeparator(input.value + key);
    };

    $scope.emptyCode = function () {
      input.value = "";
    };

    $scope.emptyCode();
  }
});
