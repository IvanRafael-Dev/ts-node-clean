import { HttpRequest } from './../../presentation/protocols/http'
import { Request, Response, Handler } from 'express'
import { Controller } from '../../presentation/protocols'

export const adaptRoute = async (controller: Controller): Promise<Handler> => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
