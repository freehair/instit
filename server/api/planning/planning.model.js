'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import Ecole from '../ecole/ecole.model';
import Instit from '../instit/instit.model';

var PlanningSchema = new mongoose.Schema({
    _id:String,
    ecole:{ type: String, ref: 'Ecole'},
    instit:{ type:Number, ref: 'Instit'},
    dateDebut:Date,
    dateFin:Date,
    titulaire:Boolean,
    classe:String
});

PlanningSchema.plugin(mongoosePaginate);

export default mongoose.model('Planning', PlanningSchema);
