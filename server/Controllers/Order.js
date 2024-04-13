const Order = require('../Models/Order')
const Cart = require('../Models/Cart')

const makeorder= async(req,res,next)=>{
    try{
          // Find the user's cart
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Create a new order based on the items in the cart
    const newOrder = new Order({
      user: req.user.id,
      items: cart.items.map(item => ({
        product: item.product,
        quantity: item.quantity
      })),
      totalPrice: cart.items.reduce((total, item) => total + item.quantity * item.product.price, 0),
      deliveryDetails: req.body.deliveryDetails
    });

    // Clear the user's cart after creating the order
    await cart.remove();

    // Save the new order
    await newOrder.save();
   console.log('order made')
    res.json(newOrder);

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
}
const getorder= async(req,res,next)=>{
try{
    const Order = await Order.find()
    console.log('order');
     return res.status(200).json(Order)
}
catch(err){
    console.log(err)
}
}

const myorder = async(req,res,next)=>{
    try{
        const myorder = await Order.findById({user:})

    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    makeorder,
    getorder
}