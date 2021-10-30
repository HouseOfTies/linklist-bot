import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('./');

const mongoPassword = process.env.MONGO_PASSWORD;

const uri = "mongodb+srv://linkilist:2PDAkInSOzLHzK8J@cluster0.sf0dn.mongodb.net/linkilist?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(uri).catch(err => console.log(err));

db.on('open', _ => {
    console.log("DataBase connected ✅");
});