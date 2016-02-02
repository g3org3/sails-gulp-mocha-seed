var request = require('supertest')
var assert = require('assert')
var Pkg = require('../../../package.json')

describe('MainController', function() {

	describe('/version', function() {

		it('should display current version', function (done) {

			request(sails.hooks.http.app)
			.get('/version')
			.expect(200)
			.end(function(err, res){
				if (err) {
					done(err)
				}
				else {
					assert.deepEqual(res.body, { version: Pkg.version })
					done()
				}
			})
		})
	})
})
