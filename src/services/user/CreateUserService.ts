import { Router, Request, Response } from 'express'

class CreateUserService {
  async execute() {
    return {ok: true}
  }
}

export {CreateUserService}