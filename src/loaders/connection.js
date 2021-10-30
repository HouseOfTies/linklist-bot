import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('./');

const uri = process.env.MONGOATLAS_URI || process.env.MONGODB_URI;

const db = mongoose.connection;

mongoose.connect(uri).catch(err => console.log(err));

db.on('open', _ => {
    console.log("DataBase connected ✅");
});