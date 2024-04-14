import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { router } from './router'

export const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)  => {
  res.status(200)
  res.sendFile(path.resolve('index.html'))
})

app.use('/api', router)