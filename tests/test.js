const expect = require('chai').expect;

const { 
  GH_PATH
} = require('../index');


describe('validates constants', () => {
  it('should have correct github config path', () => {
    expect(GH_PATH['CONFIG']).to.equal('.git/config');
  });
  it('should have correct ssh github path', () => {
    expect(GH_PATH['SSH_PATH']).to.equal('git@github.com:');
  })
});
