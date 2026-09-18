 import express from 'express'
import { createUser,  deleteUser,  getUser, updateUser } from '../controllers/user.js'

 const router = express.Router()


 router.get('/user',  getUser)

 router.post('/user', createUser)

 router.put('/user/:id', updateUser)

 router.delete('/user/:id', deleteUser)


 export default router


 