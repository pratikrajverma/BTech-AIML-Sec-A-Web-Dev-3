import express from "express";

const app = express()

// app.use(express.json())


const port  = 3000


app.post('/user', (req,res)=>{

    console.log(req.body)  =  { Name: 'ankit' }

})


app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})