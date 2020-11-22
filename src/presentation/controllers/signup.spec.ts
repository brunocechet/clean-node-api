import { MissingParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut() // system under test

    const httpRequest = {
      body: {
        email: 'test@test.com.br',
        password: 'myPassword',
        passwordConfirmation: 'myPassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = makeSut() // system under test

    const httpRequest = {
      body: {
        name: 'Test Name',
        password: 'myPassword',
        passwordConfirmation: 'myPassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = makeSut() // system under test

    const httpRequest = {
      body: {
        name: 'Test Name',
        email: 'test@test.com.br',
        passwordConfirmation: 'myPassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no passwordConfirmation is provided', () => {
    const sut = makeSut() // system under test

    const httpRequest = {
      body: {
        name: 'Test Name',
        email: 'test@test.com.br',
        password: 'myPassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
