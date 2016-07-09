class GithubProfileController {
  constructor($q, githubService) {
    this.$q = $q;
    this.githubService = githubService;
  }

  usernameChanged() {
    this.$q.all({
      profile: this.githubService.getUserProfile(this.username),
      repos: this.githubService.getPublicRepos(this.username)
    }).then(resolved => {
      console.log('profile', resolved.profile);
      console.log('public repos', resolved.repos);
      this.profile = resolved.profile;
      this.publicRepos = resolved.repos;
    });
  }
}

GithubProfileController.$inject = ['$q', 'githubService'];

export default GithubProfileController;
