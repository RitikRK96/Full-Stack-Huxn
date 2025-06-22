import express from 'express'
import homeController from '../controllers/homeControllers.js'
import aboutController from '../controllers/aboutControllers.js'

const router = express.Router()

router.get('/',homeController)
router.get('/about',aboutController)



export default router
