import mongoose from 'mongoose';

const uri = "mongodb://localhost/linkilist";
const db = mongoose.connection;

mongoose.connect(uri).catch(err => console.log(err));

db.on('open', _ => {
    console.log("DataBase connected ✅");
});