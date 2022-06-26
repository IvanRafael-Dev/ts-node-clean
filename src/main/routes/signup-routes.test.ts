import supertest from 'supertest'
import app from '../config/app'

describe('Signup routes', () => {
  it('should return 200 and an account on success', async () => {
    await supertest(app)
      .post('/api/signup')
      .send({
        name: 'Ivan Rafael',
        email: 'ivanrafael.dev@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      })
      .expect(200)
  })
})
