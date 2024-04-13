// controllers/cartController.js

const Cart = require('../Models/Cart');
const Item = require('../Models/Item');
// Get user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.uid }).populate('items.product');
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  const { quantity } = req.body;
  const { productId } = req.params;

  try {
    let cart = await Cart.findOne({ user: req.user.uid });

    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    // Fetch product details from the database based on productId
    const product = await Item.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const existingItemIndex = cart.items.findIndex(item => item.product.equals(productId));

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: product, quantity }); // Use the product object instead of just the productId
    }

    await cart.save();

    res.json(cart);
    console.log('cart updated')
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Clear user's cart
const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user.uid });
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
module.exports={
    getCart,
    addToCart,
    clearCart
}