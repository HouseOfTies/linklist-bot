import pkg from 'mongoose';

import AutoIncrementFactory from 'mongoose-sequence';

const connection = pkg.createConnection("mongodb://localhost/linkilist");

const AutoIncrement = AutoIncrementFactory(connection);

const { Schema, model } = pkg;

const LinksSchema = new Schema({
    name: { type: String },
    url: { type: String},
});
LinksSchema.plugin(AutoIncrement, {inc_field: 'id'});

const LinkModel = model('Links', LinksSchema);

export default LinkModel;

