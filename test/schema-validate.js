var Schema = require('../lib/schema');
var Hooks = require('../lib/hooks');
var expect = require('chai').expect;
require('mocha');

describe('Schema', function () {
  describe('validate', function () {
    var model;

    beforeEach(function () {
      model = new Schema({
        name: { type: 'string', required: true },
        avatar: { type: 'url', default: 'http://example.com/avatar.jpg' },
        user: { type: 'User', field: 'user_id'}
      });
    });

    it('should fail on name', function () {
      var results = model.validate({});
      expect(results.valid).to.not.be.ok;
    });

    it('should apply default to avatar', function () {
      var results = model.validate({});
      expect(results.data.avatar).to.equal('http://example.com/avatar.jpg');
    });

  });
});
