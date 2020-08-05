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
    $stateProvider.state("auto-leasing-bank-info", {
      url: "/views/auto-leasing-bank-info",
      templateUrl: "views/loan/autoleasing/step3-bank-info.html",
      controller: "autoleasingCtrl",
    });
    $urlRouterProvider.otherwise("/views/home ");
  });
