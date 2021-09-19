import { Router } from 'express'
const route = Router()
import { sendNodes, saveNodes } from '../controllers/nodes.controller'



route.post('/', saveNodes)
route.get('/', sendNodes )


export default route