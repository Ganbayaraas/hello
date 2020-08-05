angular.module("login.Ctrl", []).controller("loginCtrl", function ($scope) {
  $scope.inputType = "password";

  $scope.hideShowPassword = function () {
    if ($scope.inputType == "password") {
      $("#eye-icon").removeClass("ion-eye");
      $("#eye-icon").addClass("ion-eye-disabled");
      $scope.inputType = "text";
    } else {
      $scope.inputType = "password";
      $("#eye-icon").removeClass("ion-eye-disabled");
      $("#eye-icon").addClass("ion-eye");
    }
  };
});
