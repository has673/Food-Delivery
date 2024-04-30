import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Cart() {
    const { id } = useParams();
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const getcart=async()=>{
        try{
            const respone = await axios.get('http://localhost:3000/cart/addtocart/${id}')

        }
        catch(err){
        console.log(err)
        }
    }
    useEffect(()=>{
     getcart()
    },[])
  
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}

export default Cart
