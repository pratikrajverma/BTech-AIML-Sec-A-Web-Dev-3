import express from 'express'
const app = express()

app.use(express.json())

app.post('/user', (req,res)=>{

    try {
        const name = req.body

        if(!name){
            return res.status(404).send('name not define')
        }

        console.log(name)

        // console.log('this is main logic....')


        return res.status(200).json({
            message:'main logic',
            success:true,
            name
        })


    } catch (error) {
        
        res.status(500).json({
            message:'something went wrong internal server error....',
            error: error.message,
            success:false
        })

    }


})




function invalidRoute(req,res,next){
    res.status(404).json({
        message:'route not found',
        success:false
    })
}


 

app.use(invalidRoute)

const port = 3000

app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})
