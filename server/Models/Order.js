const mongoose = require('mongoose')
const User = require('./User')
const OrderSchema = new mongoose.Schema({
    OrderId:{
      type:String,
      required:true,
    },

    items: [{
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          default: 1
        }
      }],
    // deliveryDetails: {
    //     email: { type: String, required: true },
    //     name: { type: String, required: true },
    //     addressLine1: { type: String, required: true },
    //     city: { type: String, required: true },
    //   },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User

    },
   

    status: {
        type: String,
        enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
        default:'placed'
      },
      totalPrice:{
        type:Number,
      }
},{
    timestamps:true
})
module.exports = mongoose.model('Order',OrderSchema )