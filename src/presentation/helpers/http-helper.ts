import { AddAccountModel } from './../../domain/useCases/add-account'
import { InternalServerError } from './../errors/internal-server-error'
import { HttpResponse } from './../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new InternalServerError()
})

export const ok = (body: AddAccountModel): HttpResponse => ({
  statusCode: 201,
  body
})
