import fs from 'fs'

function getData(){
    let data =  fs.readFileSync('./database/data.json', 'utf-8')
    data = JSON.parse(data)
    return data
}

const getUser = (req,res)=>{
 
    let user =  getData()


    res.status(200).json({
        message:'data fetched successfully...',
        success:true,
         user
    })

}
 
const createUser = (req,res)=>{

    let {name, age, id} = req.body


    if(!name || !age || !id){
        return res.status(404).json({
            message : 'data not found ',
            success:false
        })
    }


    let data = getData()

    data.push( {name, age, id})

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message:'data created successfully...',
        data,
        success:true
    })


}


const updateUser = (req,res)=>{

    let {name, age} = req.body

    let id = req.params.id

    let data = getData()


    let user = data.find(e=>e.id === Number(id))


    // data.find((element)=>{
    //     return element.id === Number(id)
    // })


    // let index ;


    // user[index].name = name

    if(name){
        user.name = name
    }

    if(age){
        user.age = age
    }


    

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))


    res.status(200).json({
        message:'data updated successfully...',
        success:true,
        data
    })


}




export {getUser , createUser, updateUser}

 