const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Item', ItemSchema);
