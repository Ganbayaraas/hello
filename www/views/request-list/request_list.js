var expandCollapseApp = angular.module("request_list.Ctrl", ["ngAnimate"]);
expandCollapseApp.controller("requestListCtrl", function ($scope) {
  $scope.active = true;
  $scope.active1 = true;

  $scope.expandCard = function () {
    var coll = document.getElementsByClassName("bank-card-expand");
    console.log(coll);
    for (i = 0; i < coll.length; i++) {
      console.log("i", i);
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };
  $scope.expandCard();
});
