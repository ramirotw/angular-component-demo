import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import githubPage from './pages/github-page';
import GithubService from './services/github.service';

angular.module('app', [
    angularMaterial,
    uiRouter,
    githubPage
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
        template: "<github-page></github-page>"
      });
  })

  .service('githubService', GithubService);
