import angular from 'angular';
import uiRouter from 'angular-ui-router';
import githubComponent from './github-profile.component';
import './github-profile.css';

let githubProfileModule = angular.module('githubProfile', [
  uiRouter
])

.component('githubProfile', githubComponent)

.name;

export default githubProfileModule;
