import supertest from 'supertest'
import app from '../config/app'
import { mongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup routes', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    await mongoHelper.getCollection('accounts').deleteMany({})
  })

  it('should return 201 and an account on success', async () => {
    await supertest(app)
      .post('/api/signup')
      .send({
        name: 'Ivan Rafael',
        email: 'ivanrafael.dev@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      })
      .expect(201)
  })
})
