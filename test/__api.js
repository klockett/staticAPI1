const expect = require('chai').expect;
const request = require('supertest');
const chai = require('chai');
const server = require('../src/server.js');

const should = chai.should();
// const server = require('../src/server.js');

describe('CRUD Routes', () => {
  beforeEach(() => { // eslint-disable-line
    server = require('../src/server.js'); // eslint-disable-line
  });

  afterEach(() => { // eslint-disable-line
    server.close();
  });
  // Test for Multiple Apps
  it('should GET /api/urls returns all urls', (done) => {
    request(server)
      .get('/api/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const urls = res.body;
        // Save one single app from the list to test on in later tests
        this.url = urls.urls[0];

        // console.log(this.url);

        expect(urls.length);
      })
      .end(done);
  });
  // Test for a single app
  it('should GET /api/url/:id return a URL object by id with its id, original URL, and short URL.', (done) => {
    request(server)
      .get('/api/urls/' + this.url._id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const url = res.body;
        expect(url).to.have.property('longurl');
        expect(url).to.have.property('shorturl');
      })
      .end(done);
  });
   // Test for a single app
  it('should POST url to /api/url/ return a URL object by id with its id, original URL, and short URL.', (done) => {
    const newurl = {
      _id: '1234567abc',
      longurl: 'www.url.com',
      shorturl: 'xH45nz9',
    };

    request(server)
      .post('/api/urls/')
      .send(newurl)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
