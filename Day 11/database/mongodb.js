import mongoose from "mongoose";


async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BTechAIMLAuth')
        console.log('database connected successfully....')
    
    } catch (error) {
        console.log('failed to connect to database....')
        console.log(error)
    }
}

export default connectDB