angular.module("intro.Ctrl", []).controller("introCtrl", function ($ionicSlideBoxDelegate, $scope) {
  var vm = this;
  $scope.slider1 = $ionicSlideBoxDelegate.$getByHandle("slider1");
  $scope.slider2 = $ionicSlideBoxDelegate.$getByHandle("slider2");

  $scope.slider2_next = function () {
    $scope.slider2.next();
  };

  vm.items = [
    { title: "Та зээлийн ДИЖИТАЛ маркетаас бүх төрлийн зээлийг хамгийн хүү багатайгаар авах боломжтой.", img: "/www/img/man-img.png" },
    { title: "Харилцагчийн мэдээллийн нууцлал, аюулгүй байдлыг хамгаалж ажилладаг. ОУ-ын нууцлал, аюулгүй байдлын стандартыг нэвтрүүлэгч компани.", img: "/www/img/man-img.png" },
    { title: "Харилцагчийн мэдээллийн нууцлал, аюулгүй байдлыг хамгаалж ажилладаг. ОУ-ын нууцлал, аюулгүй байдлын стандартыг нэвтрүүлэгч компани.", img: "/www/img/man-img.png" },
  ];

  vm.onSlideChanged = function (slideIndex) {
    // Do something when slide changes
  };
});
