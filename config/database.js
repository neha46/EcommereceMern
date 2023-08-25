import mongoose from 'mongoose'
import colors from 'colors' 
const connectdb=async()=>{
 try {
    const conn=await mongoose.connect(process.env.URL)
    console.log(`mongodb is connected at ${conn.connection.host}`.bgYellow.black);
    
 } catch (error) {
    console.log(` this is ${error}`.bgRed.white);
 }
}
export default connectdb;