import User from "../model/userModel.js"

const createUser = async (req,res)=>{
    try {
        let {name, age, gender} = req.body


        if(!name || !age || !gender){
            res.status(404).json({
                message:'data not found for creation...',
                success:false
            })

        }

      let user =  await User.create( {name, age, gender} )

      res.status(200).json({
        message:'data created successfully...',
        success:true,
        user
      })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:'failed to create data',error
        })


    }

}


const findUser = async (req,res)=>{
    try {
        
    let user =   await User.find({
        age : {$gt : 20}
    })

    res.status(200).json({
        message:"data found successfully....",
        success:true,
        user,
    })

    } catch (error) {
        console.log(error)

        res.status(404).json({
            message:"failed to find data",
            error
        })

    }
}


const updateUser = async (req,res)=>{

    try {
        let {id }= req.params

        let {name,age, gender} = req.body

        console.log(id, name)

        let user

        if(name){
           user = await User.findOneAndUpdate( {_id:id} , {$set : {name : name}}) 
        }
 
        if(age){
            user = await User.findByIdAndUpdate({_id:id}, {age : age})
        }

        if(gender){
            user = await User.findByIdAndUpdate({_id:id}, {gender:gender})
        }


        res.status(200).json({
            message:'user updated successfully....',
            success:true,
            user
        })
        

    } catch (error) {
        console.log(error)
        res.status(404).json({
            success:false,
            message:'failed to update user'
        })

    }

}

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params

        let user = await User.findByIdAndDelete(id)

        res.status(200).json({
            message:'user deleted successfully...',
            success:true,
            user
        })

    } catch (error) {
        res.status(500).json({
            message:'failed to delete...',
            success:false
        })
    }
}

export { createUser ,findUser , updateUser, deleteUser}