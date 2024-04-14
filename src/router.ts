import { Router } from 'express'

export const router = Router()

function middleware (req: { path: String }, res: Object, next: Function) {
  console.log(`MIDDLE WARE TO CHECK PATH: ${req.path}`)
  next()
}

/* PLAYERS */
router.get('/player', middleware, (req, res) => {
  res.status(200)
  res.json({ message: 'Hi there?' })
})

router.get('/player/:id', (req, res) => {})
router.put('/player/:id', (req, res) => {})
router.post('/player/:id', (req, res) => {})
router.delete('/player/:id', (req, res) => {})

/* TEAMS */
router.get('/player', (req, res) => {})
router.get('/player/:id', (req, res) => {})
router.put('/player/:id', (req, res) => {})
router.post('/player/:id', (req, res) => {})
router.delete('/player/:id', (req, res) => {})