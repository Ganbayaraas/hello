angular.module("login.Ctrl", []).controller("loginCtrl", function ($scope) {
  $scope.inputType = "password";

  $scope.hideShowPassword = function () {
    if ($scope.inputType == "password") {
      $("#eye-icon").removeClass("fa fa-eye");
      $("#eye-icon").addClass("fa fa-eye-slash");
      $scope.inputType = "text";
    } else {
      $scope.inputType = "password";
      $("#eye-icon").removeClass("fa fa-eye-slash");
      $("#eye-icon").addClass("fa fa-eye");
    }
  };
});
