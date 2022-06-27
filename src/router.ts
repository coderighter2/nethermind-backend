import { Router } from 'express'
import * as Controller from './controller'

export class Routes {

  router: Router

  constructor() {
    this.router = Router()
    this.router.get('/new-hash', async (req, res) => {
      req.setTimeout(50000);
      const { hash } = req.query as { hash: string}
      const result =  await Controller.newHash(hash)
      return res.status(200).json({ result, success: true })
    })
  }
}
export default new Routes().router
