class GithubService {
  constructor($http) {
    this.$http = $http;
    this.api = 'https://api.github.com';
  }

  getUserProfile(username) {
    return this.$http.get(`${this.api}/users/${username}`)
      .then(response => {
        return response.data;
      });
  }

  getPublicRepos(username) {
    return this.$http.get(`${this.api}/users/${username}/repos`)
      .then(response => {
        return response.data;
      });
  }
}

GithubService.$inject = ['$http'];

export default GithubService;
