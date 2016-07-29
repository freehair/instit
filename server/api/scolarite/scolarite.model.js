'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

var ScolariteSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    dateDebut: Date,
    dateFin: Date
});

ScolariteSchema.plugin(mongoosePaginate);

export default mongoose.model('Scolarite', ScolariteSchema);
