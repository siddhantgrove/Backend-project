import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB = async ()=>{
    try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected moj lo roj lo na mila to khoj lo!! DB HOST:${connectionInstance.connection.host}`);
   
    } catch (error) {
        console.log("MongoDB Connection Error",error);
        process.exit(1) //currently app ka process method
        
    }
}

export default connectDB