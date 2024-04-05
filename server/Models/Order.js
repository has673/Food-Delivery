const mongoose = require('mongoose')
const Kitchen = require('./Kitchen')
const OrderSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true,

    },
 
    quantiy:{
        type:Number,


    },
    deliveryDetails: {
        email: { type: String, required: true },
        name: { type: String, required: true },
        addressLine1: { type: String, required: true },
        city: { type: String, required: true },
      },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User

    },
    Kitchen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Kitchen
    },
    status: {
        type: String,
        enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
      },
},{
    timestamps:true
})
module.exports = mongoose.model(Order,OrderSchema )