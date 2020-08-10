var expandCollapseApp = angular.module("request_list.Ctrl", ["ngAnimate"]);
expandCollapseApp.controller("requestListCtrl", function ($scope, $ionicHistory) {
  // $scope.active = true;
  // $scope.active1 = true;

  // $scope.expandCard = function () {
  //   var coll = document.getElementsByClassName("bank-card-expand");
  //   console.log(coll);
  //   for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var content = this.nextElementSibling;
  //       if (content.style.maxHeight) {
  //         content.style.maxHeight = null;
  //       } else {
  //         content.style.maxHeight = content.scrollHeight + "px";
  //       }
  //     });
  //   }
  //   console.log("i", i);
  // };
  // $scope.expandCard();
  $scope.growDiv = function () {
    var growDiv = document.getElementById("grow");
    console.log(growDiv);
    if (growDiv.clientHeight) {
      console.log("1");
      growDiv.style.height = 0;
    } else {
      console.log("2");
      var wrapper = document.querySelector(".measuringWrapper");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  };
});
