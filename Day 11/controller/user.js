import User from "../model/userModel.js"

import bcrypt from 'bcrypt'

const signup = async (req,res)=>{
    try {
        const {name, email, password , role} = req.body  

        console.log(name, email, password, role)

        if(!name || !email || !password || !role){
            return res.status(404).json({
                message:"data not found for signup",
                success:false
            })
        }
      

        let user = await User.findOne({email})

        console.log(user)

        if(user){
            return res.status(403).json({
                message:'user already exist try different email id',
                success:false
            })
        }


        const hashpassword  = await bcrypt.hash(password, 10)

        user = await User.create({
            name, password : hashpassword, email, role
        })

           


        return res.status(201).json({
            message:'user created successfully....',
            success:true,
            user
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'internal server error',error,
            success:false
        })
    }
}

export { signup}