import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'; // Import ClipLoader from react-spinners
import Card from '../components/Card'; // Import the BlogCard component

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    try {
      const response = await axios.get('http://localhost:3000/item/get');
      console.log("food")
      console.log(response.data)
      setFoods(response.data);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
 
 

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mt-14 mb-10">Blog List</h1>

      
        {loading ? ( // Show spinner when loading is true
          <ClipLoader color="#36D7B7" size={50} loading={loading} />
        ) : (
          <ul className="flex flex-wrap justify-center">
            {foods.map((food) => (
              <li key={food._id} className="mb-6 mx-4">
                <Card food={food} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
