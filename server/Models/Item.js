const mongoose = require('mongoose')
const Kitchen = require('./Kitchen')
const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true,

    },
    price:{
        type:Number
    },
    Kitchen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Kitchen
    }
},{
    timestamps:true
})
module.exports = mongoose.model(Item,ItemSchema )