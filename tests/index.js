'use strict'

const chai = require('chai')
const expect = chai.expect
const faker = require('faker')

const lambdaResponse = require('../index')

describe('Lambda response', () => {
  let fakeData

  beforeEach(done => {
    fakeData = {
      foo: faker.lorem.word()
    }
    done()
  })

  it('should get response object', done => {
    expect(lambdaResponse.success(200, fakeData)).to.deep.equal({
      statusCode: '200',
      body: JSON.stringify(fakeData),
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
    done()
  })

  it('should get response body if data no data provided', done => {
    expect(lambdaResponse.success().body).to.equal(JSON.stringify({}))
    done()
  })

  it('should get response without cors', done => {
    expect(lambdaResponse.success(200, null, {cors: false}).headers).to.deep.equal({
      'Content-Type': 'application/json'
    })
    done()
  })

  it('should get response with a custom status code', done => {
    const fakeCode = faker.random.number()

    expect(lambdaResponse.success(fakeCode, {}).statusCode).to.equal(fakeCode.toString())
    done()
  })
})