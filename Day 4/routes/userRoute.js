 import express from 'express'
import { createUser, getUser, updateUser } from '../controllers/user.js'

 const router = express.Router()


 router.get('/user',  getUser)

 router.post('/user', createUser)

 router.put('/user/:id', updateUser)


 export default router


 