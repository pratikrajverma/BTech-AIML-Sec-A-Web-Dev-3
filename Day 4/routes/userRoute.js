 import express from 'express'
import { createUser,  deleteUser,  getUser, getUserById, updateUser } from '../controllers/user.js'

 const router = express.Router()


 router.get('/user',  getUser)

 router.post('/user', createUser)

 router.put('/user/:id', updateUser)

 router.delete('/user/:id', deleteUser)


 router.get('/userbyid/:id' , getUserById)


 export default router


 