const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const shortUrl = require('../lib/util.js');
const app = express();


describe('URL Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  // This test for multiple urls
  it('GET /api/url returns all', (done) => {
    request(server)
    .get('/api/urls')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const url = res.body;

      // Save one single url
      this.url = url[0];

      expect(url.length).to.be.above(0);
    })
    .end(done);
  });

// This test for creating a shortened url
  it('POST returns a generated short URL of 6 characters', (done) => {
    request(server)
      .post('/api/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((req) => {
        const id = shortUrl.shortUrl();
        expect(id).to.have.length('7');
      })
      .end(done);
  });

  // This tests for a single URL
  it('GET /api/urls/', (done) => {
    request(server)
        .get('/api/urls/' + this.url.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(() => {
          expect(this.url).to.have.property('createdOn');
          expect(this.url).to.have.property('main_url');
          expect(this.url).to.have.property('updatedOn');
          expect(this.url).to.have.property('short_url');
        })
      .end(done);
  });

  // This updates the test
  it('POST /api/urls/', (done) => {
    const body = {
      main_url: 'www.fullsail.edu',
      short_url: '3y43Om',
    };
    request(server)
        .put('/api/urls/' + this.url)
        .send(body)
        .expect(() => {
          expect(this.url).to.have.property('createdOn');
          expect(this.url).to.have.property('main_url');
          expect(this.url).to.have.property('updatedOn');
          expect(this.url).to.have.property('short_url');
        })
      .end(done);
  });

  // This deletes a url based on its id
  it('DELETE This deletes one URL based on its id', (done) => {
    request(server)
   .get('/api/urls' + this.url)
   .set('Accept', 'application/json')
   .expect('Content-Type', /json/);
    app.delete('/api/url/' + this.url, (req, res) => {
      res.status(200);
    });
    done();
  });
});
