import express  from 'express'
 
const app = express()

app.use(express.json())


const port = 3000 

 
import router from './routes/userRoute.js'

app.use(router)

 

app.listen(port, ()=>{
    console.log('server has stared at port', port)
})

 