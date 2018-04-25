'use strict';

angular.module('App', ['ui.bootstrap', 'ui.router', 'ui.navbar'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

//state
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "html/home.html"
    })
    .state('metal-gear', {
      url: "/metal-gear",
      templateUrl: "html/metal-gear.html"
    })
    .state('metal-gear2', {
      url: "/metal-gear2",
      templateUrl: "html/metal-gear2.html"
    })
    .state('metal-gear-solid', {
      url: "/metal-gear-solid",
      templateUrl: "html/metal-gear-solid.html"
    })    
    .state('castlevania', {
      url: "/castlevania",
      templateUrl: "html/castlevania.html"
    })    
    .state('after-burner', {
      url: "/after-burner",
      templateUrl: "html/after-burner.html"
    })
    
    .state('double-dragon', {
      url: "/double-dragon",
      templateUrl: "html/double-dragon.html"
    })
    .state('fatal-fury', {
      url: "/fatal-fury",
      templateUrl: "html/fatal-fury.html"
    })
    /*.....*/
    ;
})

.controller('NavigationController', function($scope) {

  $scope.allGames = [{
    name: "Konami",
    link: "#",
    subtree: [{
      name: "Metal Gear",
      link: "#",
      subtree: [{
        name: "Metal Gear",
        link: "metal-gear"
      }, {
        name: "Metal Gear 2: Solid Snake",
        link: "metal-gear2"
      }, {
        name: "Metal Gear Solid: The Twin Snakes",
        link: "metal-gear-solid"
      }]
    }, {
      name: "divider",
      link: "#"
    }, {
      name: "Castlevania",
      link: "#",
      subtree: [{
        name: "Castlevania",
        link: "castlevania"
      }, {
        name: "Castlevania II: Simon's Quest",
        link: "#"
      }, {
        name: "Castlevania III: Dracula's Curse",
        link: "#"
      }]
    }]
  }, {
    name: "SNK",
    link: "#",
    subtree: [{
      name: "Fatal Fury",
      link: "#",
      subtree: [{
        name: "Fatal Fury",
        link: "fatal-fury"
      }, {
        name: "Fatal Fury 2",
        link: "#"
      }]
    }, {
      name: "divider",
      link: "#"
    }, {
      name: "Metal Slug",
      link: "#",
      subtree: [{
        name: "Metal Slug",
        link: "#"
      }, {
        name: "Metal Slug 2",
        link: "#"
      }, {
        name: "Metal Slug 3",
        link: "#"
      }]
    }]
  }, {
    name: "Sega",
    link: "#",
    subtree: [{
      name: "After Burner",
      link: "after-burner"
    }, {
      name: "R-Type",
      link: "#"
    }]
  }, {
    name: "Nintendo",
    link: "#",
    subtree: [{
      name: "Double Dragon",
      link: "double-dragon"
    }, {
      name: "Super Mario Bros.",
      link: "#"
    }]
  }];
});