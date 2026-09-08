import express from 'express'
const app = express()

app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send('<h1>Welcome to Express Backend</h1>')

//     res.json({
//         message:'Welcome to Express Backend',
//         success:true
//     })
// })

// app.get('/contact' , (req,res)=>{
//     res.send('<h1>this is contact page</h1>')

// })

// app.get('/about', (req,res)=>{
//     res.send('<h1>this is about page</h1>')
// })

let users = ['Ankit', 'Rahul', 'Nandan', 'Jigar']

 


app.get('/users' , (req,res)=>{
    res.status(200).json({
        message:'data send successfully...',
        success:true,
        users:users
    }) 
})



app.post('/createuser'  , (req, res)=>{

    let name = req.body.name


    if(!name){
        return res.status(404).json({
            message:'name not found',
            success:false
        })
    }

    users.push(name)


    res.status(200).json({
        message:'user created successfully..',
        users
    })

})


app.put('/updateuser', (req,res)=>{

    // let name = req.body.namme
    // let newName = req.body.newName

    console.log('first')

   let {name, newName} = req.body

    if(!name || !newName){
        return res.status(404).json({
            message:'data not found for update....',
            success:false
        })
 
    }
    

    let index = users.indexOf(name)

    users[index] = newName

    res.status(200).json({
        message:'data updated successfully...',
        users
    })
})


app.delete('/deleteuser', (req,res)=>{

        console.log('first')

    let {name} = req.body

    let index = users.indexOf(name)

    if(!users[index]){
        return  res.status(403).json({
            message:'name not found...',
            success:false
        })
    }

       users.splice(index, 1)
 
       res.status(200).json({
        message:'user deleted...',
        users
       })



})

app.listen(3000, ()=>{
    console.log('server has started at port 3000')
})




 