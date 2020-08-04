angular
  .module("index", [
    "ionic",
    "ngCordova",
    // modules
    "login.Ctrl",
  ])
  .run(function ($ionicPlatform, $state, $cordovaSplashscreen) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
        JSON.str;
      }
    });
  })
  .config(function (
    $stateProvider,
    $urlRouterProvider,
    $ionicConfigProvider,
    $cordovaInAppBrowserProvider,
    $httpProvider
  ) {
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
    $stateProvider.state("login", {
      url: "/views/login",
      templateUrl: "views/login/login.html",
      controller: "loginCtrl",
    });
    // $stateProvider.state("appHome", {
    //   url: "/views/home",
    //   templateUrl: "views/home/home.html",
    //   controller: "homeCtrl",
    // });
    $urlRouterProvider.otherwise("/views/login");
  });
