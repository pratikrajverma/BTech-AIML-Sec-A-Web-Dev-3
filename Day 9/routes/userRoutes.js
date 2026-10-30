import express, { Router } from 'express'
import { createUser, deleteUser, findUser, updateUser } from '../controller/user.js'


const route = express.Router()


route.post('/user', createUser)

route.get('/user', findUser)

route.put('/user/:id', updateUser)

route.delete('/user/:id', deleteUser)

export default route

