import mongoose from "mongoose";
const DBConnection = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://GaurangBRDV:w8U064MxVE3lO4g7@jwtcluster.q5gd2sh.mongodb.net/?retryWrites=true&w=majority&appName=JWTCluster',{useNewUrlParser : true})
        console.log('Databse connected');
    } catch (error) {
        console.error('Error while connecting with database',error.message);
    }
}

export default DBConnection;