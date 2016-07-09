import template from './github-profile.html';
import controller from './github-profile.controller';
import './github-profile.css';

let githubProfileComponent = {
  restrict: 'E',
  bindings: {
    profile: '<',
    publicRepos: '<'
  },
  template,
  controller
};

export default githubProfileComponent;
