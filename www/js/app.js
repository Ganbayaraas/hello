var app = angular
  .module("index", [
    "ionic",
    "ngCordova",
    // modules
    "home.Ctrl",
    "intro.Ctrl",
    "intro2.Ctrl",
    "profile.Ctrl",
    "request_list.Ctrl",
    "search.Ctrl",
    "register.Ctrl",
    "sign.Ctrl",
    "login.Ctrl",
    "autoleasing.Ctrl",
    "business_loan.Ctrl",
    "car_collateral.Ctrl",
    "property_collateral.Ctrl",
    "consumer_loan.Ctrl",
    "car.Ctrl",
    "carinfo.Ctrl",
    "carlist.Ctrl",
    "qr.Ctrl",
    "trend.Ctrl",
  ])
  .run(function ($ionicPlatform, $state, $cordovaSplashscreen) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
        JSON.str;
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $cordovaInAppBrowserProvider, $httpProvider) {
    if (!window.cordova) {
      var appID = 1234567890;
      var version = "v2.0";
    }

    var browserOptions = {
      location: "yes",
      toolbar: "yes",
    };

    document.addEventListener(
      "deviceready",
      function () {
        var preferences = {
          iosURL: "some URL",
          appName: "APP NAME",
          language: "EN",
        };
      },
      false
    );

    $cordovaInAppBrowserProvider.setDefaultOptions(browserOptions);
    $stateProvider.state("home", {
      url: "/views/home",
      templateUrl: "views/home/home.html",
      controller: "homeCtrl",
    });
    $stateProvider.state("requestList", {
      url: "/views/request_list",
      templateUrl: "views/request-list/request_list.html",
      controller: "requestListCtrl",
    });
    $stateProvider.state("intro", {
      url: "/views/intro",
      templateUrl: "views/intro/intro.html",
      controller: "introCtrl",
    });
    $stateProvider.state("intro2", {
      url: "/views/intro2",
      templateUrl: "views/intro/intro2/intro2.html",
      controller: "introCtrl",
    });
    $stateProvider.state("search", {
      url: "/views/search",
      templateUrl: "views/search/search.html",
      controller: "searchCtrl",
    });
    $stateProvider.state("profile", {
      url: "/views/profile",
      templateUrl: "views/profile/profile.html",
      controller: "profileCtrl",
    });
    $stateProvider.state("register", {
      url: "/views/register",
      templateUrl: "views/register/register.html",
      controller: "registerCtrl",
    });
    $stateProvider.state("sign", {
      url: "/views/sign",
      templateUrl: "views/sign/sign.html",
      controller: "signCtrl",
    });
    $stateProvider.state("login", {
      url: "/views/login",
      templateUrl: "views/login/login.html",
      controller: "loginCtrl",
    });
    $stateProvider.state("autoleasing-1", {
      url: "/views/autoleasing-1",
      templateUrl: "views/loan/autoleasing/step1.html",
      controller: "autoleasingCtrl",
    });
    $stateProvider.state("autoleasing-2", {
      url: "/views/autoleasing-2",
      templateUrl: "views/loan/autoleasing/step2.html",
      controller: "autoleasingCtrl",
    });
    $stateProvider.state("autoleasing-3", {
      url: "/views/autoleasing-3",
      templateUrl: "views/loan/autoleasing/step3.html",
      controller: "autoleasingCtrl",
    });
    $stateProvider.state("autoleasing-bank-info", {
      url: "/views/autoleasing-bank-info",
      templateUrl: "views/loan/autoleasing/step3-bank-info.html",
      controller: "autoleasingCtrl",
    });
    $stateProvider.state("autoleasing-4", {
      url: "/views/autoleasing-4",
      templateUrl: "views/loan/autoleasing/step4.html",
      controller: "autoleasingCtrl",
    });
    $stateProvider.state("business_loan", {
      url: "/views/business_loan",
      templateUrl: "views/loan/business_loan/business_loan.html",
      controller: "business_loanCtrl",
    });
    $stateProvider.state("car_coll", {
      url: "/views/car_collateral",
      templateUrl: "views/loan/car_collateral/car_collateral.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("car_coll2", {
      url: "/views/car_collateral2",
      templateUrl: "views/loan/car_collateral/car_collateral2.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("car_coll3", {
      url: "/views/car_collateral3",
      templateUrl: "views/loan/car_collateral/car_collateral3.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("property_collateral", {
      url: "/views/property_collateral",
      templateUrl: "views/loan/property_collateral/collateral.html",
      controller: "property_collateralCtrl",
    });
    $stateProvider.state("basket", {
      url: "/views/basket",
      templateUrl: "views/basket/basket.html",
      controller: "basketCtrl",
    });
    $stateProvider.state("loan_success", {
      url: "/views/loan_success",
      templateUrl: "views/loan_success/loan_success.html",
      controller: "loan_successCtrl",
    });
    $stateProvider.state("request_detail", {
      url: "/views/request-detail/request_detail",
      templateUrl: "views/request-list/request-detail/request_detail.html",
      controller: "request_detailCtrl",
    });
    $stateProvider.state("consumer_loan", {
      url: "/views/loan/consumer_loan",
      templateUrl: "views/loan/consumer_loan/consumer.html",
      controller: "consumer_loanCtrl",
    });
    $stateProvider.state("car", {
      url: "/views/loan/car",
      templateUrl: "views/car/car.html",
      controller: "carCtrl",
    });
    $stateProvider.state("car-brandlist", {
      url: "/views/loan/car/brandlist",
      templateUrl: "views/car/brandlist.html",
      controller: "carCtrl",
    });
    $stateProvider.state("car-info", {
      url: "/views/loan/car/info",
      templateUrl: "views/car/car-info.html",
      controller: "carinfoCtrl",
    });
    $stateProvider.state("request_car_detail", {
      url: "/views/request-detail/request_detail/car-detail",
      templateUrl: "views/request-list/request-detail/request_car_detail.html",
    });
    $stateProvider.state("carlist", {
      url: "/views/carlist",
      templateUrl: "views/carlist/carlist.html",
      controller: "carlistCtrl",
    });
    $stateProvider.state("qr", {
      url: "/views/qr",
      templateUrl: "views/qr/qr.html",
      controller: "qrCtrl",
    });
    $stateProvider.state("trend", {
      url: "/views/trend",
      templateUrl: "views/trend/trend.html",
      controller: "trendCtrl",
    });
    $urlRouterProvider.otherwise("/views/home ");
  })
  .controller("index", function ($scope, $ionicPlatform, $state) {
    console.log("INDE");
    console.log($scope);
    console.log($state);
    console.log($state.current.name);
    $scope.shouldHide = function () {
      switch ($state.current.name) {
        case "statename1":
          return true;
        case "statename2":
          return true;
        default:
          return false;
      }
    };
  })
  .directive("format", [
    "$filter",
    function toAmount($filter) {
      return {
        require: "?ngModel",
        link: function (scope, elem, attrs, ctrl) {
          if (!ctrl) return;

          ctrl.$formatters.unshift(function (a) {
            return $filter(attrs.format)(ctrl.$modelValue, attrs.format == "currency" ? "€" : "");
          });

          elem.bind("keyup", function (event) {
            var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, "");
            elem.val($filter(attrs.format)(plainNumber));
          });
        },
      };
    },
  ]);
// app.controller("index", function ($scope, $ionicPlatform, $state) {
//   console.log("INDE");
//   console.log($scope);
//   console.log($state);
//   console.log($state.current.name);
//   $scope.shouldHide = function () {
//     switch ($state.current.name) {
//       case "statename1":
//         return true;
//       case "statename2":
//         return true;
//       default:
//         return false;
//     }
//   };
// });
app.controller("basketCtrl", function ($scope, $ionicPlatform) {});
app.controller("loan_successCtrl", function ($scope, $ionicPlatform) {});
app.controller("request_detailCtrl", function ($scope, $ionicPlatform, $ionicPopup, $ionicModal) {
  $scope.overlayOnConfirm = function () {
    if (document.getElementById("confirm-overlay")) {
      document.getElementById("confirm-overlay").style.display = "block";
      console.log("1");
    }
  };
  $scope.overlayOffConfirm = function () {
    if (document.getElementById("confirm-overlay")) {
      document.getElementById("confirm-overlay").style.display = "none";
      console.log("2");
    }
  };
  $scope.overlayOnConfirm();

  $scope.data = {
    model: null,
    availableOptions: [
      { id: "1", name: "Баянзүрх дүүрэг" },
      { id: "2", name: "Багануур дүүрэг" },
      { id: "3", name: "Сүхбаатар дүүрэг" },
    ],
  };
  var option = "";
  $scope.data.availableOptions.forEach((element) => {
    option += "<option value='" + element.name + "'>" + element.name + " </option>";
  });
  console.log(option);
  var customTemplate = "<label for='repeatSelect'></label>" + "<select name='repeatSelect' id='repeatSelect' ng-model='data.model'>" + "<option  value=''>Сонгох</option>" + option + "</select>";

  $scope.showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: "Салбар сонгох",
      template: customTemplate,
    });
  };
  // MODAL

  $ionicModal
    .fromTemplateUrl("templates/modal.html", {
      scope: $scope,
    })
    .then(function (modal) {
      $scope.modal = modal;
    });
});
