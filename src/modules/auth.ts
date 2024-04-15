import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from './types'


export function createToken(user: User) {
  if (process.env.JWT_SECRET) {
    return jwt.sign(user, process.env.JWT_SECRET)
  } else {
    throw new Error('JWT_SECRET not set in environment')
  }
}

export function protect(req: Request, res: Response) {
  const bearer = req.headers.authorization
  if (!bearer) {
    res.status(401).json({ message: 'No token provided' })
    return
  }

  const token = bearer.split(' ').at(-1)
  if (!token) {
    res.status(401).json({ message: 'Invalid token' })
    return
  }

  try {
      // req.user = user
    const user = jwt.verify(token, process.env.JWT_SECRET || '')
    console.log(user)
  } catch (e) {
    console.error(e)
    res.status(401).json({ message: 'Invalid token/secret' })
    return
  }
}