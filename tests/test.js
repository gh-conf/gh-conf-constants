const expect = require('chai').expect;

const { GH_API, GH_GENERAL, GH_PATH, GH_TEMPLATES } = require('../index');


describe('validates path constants', () => {
  it('should have correct github config path', () => {
    expect(GH_PATH['CONFIG']).to.equal('.git/config');
  });
  it('should have correct ssh github path', () => {
    expect(GH_PATH['SSH_PATH']).to.equal('git@github.com:');
  });
});

describe('validates api constants', () => {
  it('should have correct repo details', () => {
    expect(GH_API['REPO_DETAILS']).to.equal('https://api.github.com/repos/{username}/{repository}');
  });
  it('should have correct contributors url', () => {
    expect(GH_API['GITHUB_CONTRIBUTORS']).to.equal('https://api.github.com/repos/{username}/{repository}/contributors');
  });
});

describe('validates templates constants', () => {
  it('should have corrent template details', () => {
    expect(GH_TEMPLATES['HOF_TEMPLATE']).to.equal('<a href="https://github.com/{username}"><img src="https://github.com/{username}.png" width="30" /></a>');
  });
});

describe('validates general constants', () => {
  it('should have origin key constant', () => {
    expect(GH_GENERAL['ORIGIN_KEY']).to.equal('remote "origin"');
  });
});
