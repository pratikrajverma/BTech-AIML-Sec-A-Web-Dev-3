import fs from 'fs'


function getData(){

    let data =  fs.readFileSync('../database/data.json', 'utf-8')


    data = JSON.parse(data)

    console.log(data)
    return data


}


const getuser = (req,res)=>{
 
    let data =  getData()


    res.status(200).json({
        message:'data fetched successfully...',
        success:true,
        data:data
    })

}

export { getuser }