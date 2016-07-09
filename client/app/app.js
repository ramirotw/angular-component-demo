import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import GithubProfileController from './controllers/github-profile.controller';
import GithubService from './services/github.service';
import './css/app.css';

angular.module('app', [
    angularMaterial,
    uiRouter
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root', {
        url: "/",
        controller: 'GithubProfileController',
        controllerAs: 'vm',
        templateUrl: "app/views/github-profile.html"
      });
  })

  .service('githubService', GithubService)
  .controller('GithubProfileController', GithubProfileController);
