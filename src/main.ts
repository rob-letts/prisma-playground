import { app } from './server'

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})