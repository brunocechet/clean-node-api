import { SignUpController } from './signup'

describe('SignUp controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController() // system under test

    const httpRequest = {
      body: {
        email: 'test@test.com.br',
        password: 'myPassword',
        passwordConfirmation: 'myPassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
