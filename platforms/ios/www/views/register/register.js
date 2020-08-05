angular.module("register.Ctrl", []).controller("registerCtrl", function ($ionicSlideBoxDelegate, $scope) {
  var progressBar = {
    Bar: $("#progress-bar"),
    step1: $("register-step-1"),
    step2: $("register-step-2"),
    // Reset: function () {
    //   if (this.Bar) {
    //     this.Bar.find("li").removeClass("active");
    //   }
    // },
    Next: function () {
      $("#progress-bar li:not(.active):first").addClass("active");
      $("#register-step-1").addClass("remove-step");
      $("#register-step-1").removeClass("add-step");

      $("#register-step-2").removeClass("remove-step");
      $("#register-step-2").addClass("add-step");
    },
    Back: function () {
      $("#progress-bar li.active:last").removeClass("active");

      $("#register-step-2").removeClass("add-step");
      $("#register-step-2").addClass("remove-step");

      $("#register-step-1").removeClass("remove-step");
      $("#register-step-1").addClass("add-step");
    },
  };
  //progressBar.Reset();

  $("#Next").on("click", function () {
    progressBar.Next();
    console.log("1");
  });
  $("#Back").on("click", function () {
    progressBar.Back();
  });
  $("#Reset").on("click", function () {
    progressBar.Reset();
  });
});
