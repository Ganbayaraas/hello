angular
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
    "collateral_loan.Ctrl",
    "car_collateral.Ctrl",
    "property_collateral.Ctrl",
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
    $stateProvider.state("coll", {
      url: "/views/collateral_loan",
      templateUrl: "views/collateral_loan/collateral_loan.html",
      controller: "collateral_loanCtrl",
    });
    $stateProvider.state("car_coll", {
      url: "/views/car_collateral",
      templateUrl: "views/car_collateral/car_collateral.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("car_coll2", {
      url: "/views/car_collateral2",
      templateUrl: "views/car_collateral/car_collateral2.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("car_coll3", {
      url: "/views/car_collateral3",
      templateUrl: "views/car_collateral/car_collateral3.html",
      controller: "car_collateralCtrl",
    });
    $stateProvider.state("property_collateral", {
      url: "/views/property_collateral",
      templateUrl: "views/property_collateral/collateral_1.html",
      controller: "property_collateralCtrl",
    });
    $urlRouterProvider.otherwise("/views/home ");
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
