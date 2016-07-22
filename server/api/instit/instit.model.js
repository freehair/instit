'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

var InstitSchema = new mongoose.Schema({
    id:Number,
    firstName: String,
    lastName: String,
    birthDate: Date
});

InstitSchema.plugin(mongoosePaginate);

export default mongoose.model('Instit', InstitSchema);
