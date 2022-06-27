import { HttpRequest } from './../../presentation/protocols/http'
import { Handler, Request, Response } from 'express'
import { Controller } from '../../presentation/protocols'

export const adaptRoute = (controller: Controller): Handler => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
