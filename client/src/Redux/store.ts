import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userslice"; // Assuming you have a slice for user management
import cartReducer from "./slices/cartslice"; // Import the cart slice

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer, // Include the cart reducer
    // Add other reducers if any
  },
  // Add middleware, devtools configuration, etc. if needed
});

export default store;
