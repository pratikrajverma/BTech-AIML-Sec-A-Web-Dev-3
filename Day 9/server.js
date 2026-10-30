import express from 'express'

const app = express()

import connectDB from './database/mogodb.js'
import route from './routes/userRoutes.js'


app.use(express.json())

app.use(route) 

connectDB()

const port  = 3000


app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})

