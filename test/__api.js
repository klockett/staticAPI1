var request = require('supertest');

describe('API', function () {
  var server;

  beforeEach(function () {
    server = require('../src/server.js');
  });

  afterEach( function () {
    server.close();
  });

  it('Should return specified object.', function testURL(done) {
    request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { ' hello ': 'world' }, done);
  });

        it('Status should return specified healthy:true.', function testURL(done) {
          request(server)
          .get('/api/status')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, { 'url': true }, done);
        });

      it('/user/id should return a user obj with id.', function testURL(done) {
        request(server)
        .get('/api/user/347')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { user:{id: 347 }}, done);
      });
});
