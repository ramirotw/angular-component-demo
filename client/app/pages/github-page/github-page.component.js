import GithubPageController from './github-page.controller';

let githubPageComponent = {
  restrict: 'E',
  bindings: {},
  template: `
    <md-input-container>
    <label>github username</label>
    <input
          ng-model="$ctrl.username"
          ng-model-options="{ debounce: 1000 }"
          ng-change="$ctrl.usernameChanged()"
    >
    </md-input-container>

    <github-profile
      ng-if="$ctrl.profile"
      profile="$ctrl.profile"
      public-repos="$ctrl.publicRepos"
    >
    </github-profile>
  `,
  controller: GithubPageController
};

export default githubPageComponent;
