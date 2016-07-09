import githubProfileComponent from '../../components/github-profile';
import githubPageComponent from './github-page.component';

let githubPageModule = angular.module('githubPage', [
  githubProfileComponent
])

.component('githubPage', githubPageComponent)

.name;

export default githubPageModule;
