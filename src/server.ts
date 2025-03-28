import express, { Request, Response } from 'express'
const app = express()
const port = 3005

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
 