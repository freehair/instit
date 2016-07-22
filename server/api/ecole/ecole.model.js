'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

var EcoleSchema = new mongoose.Schema({
    id:Number,
    code:String,
    name: String,
    numero:Number,
    complement:String,
    adresse: String,
    codePostal: Number,
    ville:String,
    longitude:Number,
    latitude:Number
});

EcoleSchema.plugin(mongoosePaginate);

export default mongoose.model('Ecole', EcoleSchema);
