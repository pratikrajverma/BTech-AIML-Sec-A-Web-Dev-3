import express from 'express'
import { getuser } from '../controllers/user'

const router = express.Router()



router.get('/user',  getuser)