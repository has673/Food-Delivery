import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { ClipLoader } from 'react-spinners';

function Cart() {
 
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const getcart=async()=>{
        try{
            const respone = await axios.get(`http://localhost:3000/cart/getcart/`)
            setCart(respone.data)
            setLoading(false)

        }
        catch(err){
        console.log(err)
        setLoading(false)
        }
        finally{
          setLoading(false)
        }
    }
    useEffect(()=>{
     getcart()
    },[])
  
  return (
    <div>
      <h1>Cart</h1>
      {loading ? ( // Show spinner when loading is true
          <ClipLoader color="#36D7B7" size={50} loading={loading} />
        ) : (
          <ul className="flex flex-wrap justify-center">
            {cart.map((cart) => (
              <li key={cart._id} className="mb-6 mx-4">
                <Card food={cart} />
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Cart
