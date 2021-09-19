import express from 'express'
import './database'

import { nodes } from './routes'
  
const app = express()

// Middlewares
app.use(express.json())

// routes
app.use('/nodes', nodes)

// configs
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})