import express from "express";

import morgan from "morgan";

import cors from 'cors'


// app.use(cors({
//     origin:'*'
// }))





const app = express()

// app.use(express.static('public'))

 app.use(express.json())



//  app.use(express.urlencoded({
//     extended:true
//  }))


function middleware1(req,res,next){
    console.log('this is middleware first')

    next()
}

//   app.use(middleware1)



function logger(req,res,next){
    console.log(req.method)

    console.log(req.url)

    console.log(res.statusCode)

    next()

}


  app.use(morgan('dev'))


const port  = 3000

app.get('/user',   logger ,  middleware1,    (req,res)=>{
    // console.log(req.body)  

    console.log('this is logic function')

    res.send('<h1>this is logic function....</h1>')
})

app.get('/about', logger,   (req,res)=>{
    console.log('this is about logic')

    res.send('This is about logic')
})
 
 



app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})