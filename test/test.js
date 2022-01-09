import {expect} from 'chai';
import request from 'supertest';
import app from '../src/api.js';

describe('Nodejs-api', () => {
  // Create dummy login data
  const loginDetails = { username: 'admin', password: 'awesome' }
  // Create token variable to save user token
  let token;
  let _id;

  // Mock user authentication
  describe('Mock Authentication', () => {
    it('it should not log user in if username and password do not meet requirements', (done) => {
      request.agent(app)
        .post('/api/login')
        .send({ username: 'someone', password: '' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400)
          done()
        })
    })

    it('it should accept a username/password and return a signed JWT', (done) => {
      request.agent(app)
        .post('/api/login')
        .send(loginDetails)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.have.property('token')
          token = res.body.token
          done()
        })
    })
  })

  //Posts api testing
  describe('Posts API', () => {
    it('it should not process if token is not provided', (done) => {
        request.agent(app)
          .get('/api/post')
          .end((err, res) => {
            expect(res.statusCode).to.equal(403)
            done()
          })
    })

    it('it should not process if token is invalid', (done) => {
      request.agent(app)
        .get('/api/post')
        .set('token', 'notoken')
        .end((err, res) => {
          expect(res.statusCode).to.equal(401)
          done()
        })
    })

    it('it should show all posts', (done) => {
        request.agent(app)
          .get('/api/post')
          .set('token', token)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
    })

    it('it should show posts by pagination', (done) => {
        request.agent(app)
          .get('/api/post?page=1&perPage=2')
          .set('token', token)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
    })

    it('Create new post', (done) => {
        request.agent(app)
          .post('/api/post')
          .set('token', token)
          .send({title: 'testt post title'})
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.have.property('_id')
            _id = res.body._id
            done()
          })
    })

    it('Read created post', (done) => {
        request.agent(app)
          .get('/api/post/'+_id)
          .set('token', token)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
    })

    it('Update created post', (done) => {
        request.agent(app)
          .patch('/api/post/'+_id)
          .set('token', token)
          .send({title: 'updatee test post title'})
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
    })

    it('Delete created post', (done) => {
        request.agent(app)
          .delete('/api/post/'+_id)
          .set('token', token)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
    })
  })

})