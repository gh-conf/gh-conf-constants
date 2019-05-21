const expect = require('chai').expect;

const { GH_API, GH_PATH } = require('../index');


describe('validates path constants', () => {
  it('should have correct github config path', () => {
    expect(GH_PATH['CONFIG']).to.equal('.git/config');
  });
  it('should have correct ssh github path', () => {
    expect(GH_PATH['SSH_PATH']).to.equal('git@github.com:');
  })
});

describe('validates api constants', () => {
  it('should have corrent repo details', () => {
    expect(GH_API['REPO_DETAILS']).to.equal('https://api.github.com/repos/{username}/{repostiory}');
  });
  it('should have correct contributors url', () => {
    expect(GH_API['GITHUB_CONTRIBUTORS']).to.equal('https://api.github.com/repos/{username}/{repository}/contributors');
  })
});
