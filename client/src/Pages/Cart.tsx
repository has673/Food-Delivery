import axios from "axios";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import CartCard from "../components/CartCard";


function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.currentUser.token);

  const getCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/getcart/`, {
        headers: {
          Authorization: token
        }
      });
      console.log(response.data);
      setCart(response.data); // Set the entire response data to the cart state
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
    <h1>Cart</h1>
    {loading ? (
      <ClipLoader color="#36D7B7" size={50} loading={loading} />
    ) : (
      <ul className="flex flex-wrap justify-center">
        {cart && cart.items && cart.items.length > 0 ? (
          cart.items.map((cartItem) => (
            <li key={cartItem._id} className="mb-6 mx-4">
              <CartCard Cart={cartItem} />
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    )}
  </div>
  );
}

export default Cart;
