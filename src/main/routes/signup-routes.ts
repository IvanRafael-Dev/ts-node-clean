import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', (req, res) => {
    return res.status(200).json({ message: req.body })
  })
}
