import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from './../helpers/http-helper'
import { HttpRequest, HttpResponse } from './../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'))
    }
    if (!httpRequest.body.passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
