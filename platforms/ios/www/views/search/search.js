var app = angular.module("search.Ctrl", []);

app.controller("searchCtrl", function ($scope) {
  $scope.endDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  $scope.endDay = 5;
});
