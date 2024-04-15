import * as dotenv from 'dotenv'
import { app } from './server'

dotenv.config()

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})