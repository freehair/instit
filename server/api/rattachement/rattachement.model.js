'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import Ecole from '../ecole/ecole.model';
import Instit from '../instit/instit.model';

var RattachementSchema = new mongoose.Schema({
    id:Number,
    ecole:{ type: String, ref: 'Ecole'},
    instit:{ type:Number, ref: 'Instit'}
});

RattachementSchema.plugin(mongoosePaginate);

export default mongoose.model('Rattachement', RattachementSchema);
