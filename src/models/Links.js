import pkg from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('./');

const uri = process.env.MONGOATLAS_URI || process.env.MONGODB_URI;

import AutoIncrementFactory from 'mongoose-sequence';

const connection = pkg.createConnection(uri);

const AutoIncrement = AutoIncrementFactory(connection);

const { Schema, model } = pkg;

const LinksSchema = new Schema({
    name: { type: String },
    url: { type: String},
});
LinksSchema.plugin(AutoIncrement, {inc_field: 'id'});

const LinkModel = model('Links', LinksSchema);

export default LinkModel;

