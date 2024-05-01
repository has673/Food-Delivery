
import { Link } from 'react-router-dom';
function CartCard({ Cart }) {
    return (
      // <Link to={`/blog/${food._id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 block hover:border-blue-500">
     <Link to={`/food/${Cart._id}`} >
     <div className="aspect-w-16 aspect-h-9">
          <img className="object-cover rounded-t-lg" src={`http://localhost:3000/item/getphoto/${Cart.product._id}`} alt={Cart.product.name} width={250} height={250}/>
        </div>
        <div className="p-5">
          <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{Cart.product.name}</h5>
          <h6 className="mb-2 tracking-tight text-gray-900 dark:text-white">{`Price: ${Cart.product.price}`}</h6>
          <h6 className="mb-2 tracking-tight text-gray-900 dark:text-white">{`Quantity: ${Cart.product.Quantity}`}</h6>
        </div>
        </Link>
      /* </Link> */
    );
  }
  
  export default CartCard;