const mongoose = require('mongoose')
const KitchenSchema = new mongoose.Schema({
    name:{
        type: String
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
        
    },
  
    
    
}
, { timestamps: true });
module.exports = mongoose.model('Kitchen', KitchenSchema)