import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
// import Comment from '../components/Comment'; // Import the Comment component
// import { AiFillLike, AiOutlineLike } from "react-icons/ai";
// import { useSelector } from 'react-redux';
// import MakeComment from '../components/MakeComment';

// import { checkLiked } from '../../../server/Controllers/User';

function Food() {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    // const[my , setMy] = useState(false)
    // const[mycomment, setMyComment] = useState(false)
    // const[content , setContent ]= useState('')
    // const [comments, setComments] = useState([]);
    // const [loadingComments, setLoadingComments] = useState(true);
    // const [isLiked, setIsLiked] = useState(false); // Track if the user has already liked the blog
    // const userId = useSelector(state => state.user.currentUser.uid);
    // const token = useSelector(state => state.user.currentUser.token);
    // console.log(userId)

    useEffect(() => {
        fetchFood();
        // fetchComments();
        // checkLiked()
    }, [id]);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post(
    //             `http://localhost:3000/comment/makecomment/${id}`,
    //             { Content : content},
    //             {
    //                 headers: {
    //                     Authorization: token
    //                 }
    //             }
    //         );
    //         setContent('')
    //         fetchComments()
       
    //         // You might want to trigger a re-fetch of comments in the parent component
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    const Addtocart= async()=>{
        try{
            const cart = await axios.get(`http://localhost:3000/cart/addtocart/${id}`,{
                quantity:1
            });
            
            console.log('cart')

        }
        catch(err){
            console.log(err)
        }
       

    }
    const fetchFood = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/item/getone/${id}`);
            console.log(response.data)
            setFood(response.data);
            console.log(food)
            // setIsLiked(response.data.likes.includes(userId)); // Check if the current user ID is in the likes array
            // console.log(`blog user ${ response.data.user}`)
            // if(response.data.user === userId){
            //   setMy(true)
            // }
            // else{
            //     setMy(false)
            // }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    // const deletemycomment = async(commentid)=>{
    //     try{
    //       const res = await axios.delete(`http://localhost:3000/User/deletemycomment/${commentid}`,{
    //         headers:{
    //           Authorization:token
    //         }
    //       })
    //       console.log(res.data)
    //       fetchComments()
    //     //   fetchComments()
    //     }
        
    //     catch(err){
    //       console.log(err)
    //     }
    
    //   }
    // const fetchComments = async () => {
    //     try {
    //         setLoadingComments(true);
    //         const response = await axios.get(`http://localhost:3000/food/getcommentsonblog/${id}`);
    //         setComments(response.data.comments);
    //         console.log(response.data.comments)
    //         const hasUserComment = response.data.comments.some(comment => comment.User === userId);
    //         setMyComment(hasUserComment);
    //     } catch (err) {
    //         console.error(err);
    //     } finally {
    //         setLoadingComments(false);
    //     }
    // };
// const checkLiked = async()=>{
//   try{
//     const res = await axios.get(`http://localhost:3000/User/checkedliked/${id}`,{
//       headers:{
//         Authorization:token

//       }
      
//     })
//     if (res.data.liked == true) {
//       setIsLiked(true);
//   } else {
//       setIsLiked(false);
//   }

//   }
//   catch(err){
//     console.log(err)
//   }
// }
    // const likeBlog = async () => {
    //     try {
    //         const response = await axios.put(
    //             `http://localhost:3000/User/likeblog/${id}`,
    //             {},
    //             {
    //                 headers: {
    //                     Authorization: token
    //                 },
    //             }
    //         );
    //         setIsLiked(true);
    //         console.log('Like added');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div>
            {loading ? (
                <ClipLoader className='flex items-center justify-center' color="#2196F3" size={50} loading={loading} />
            ) : food ? (
                <div className="flex">
                    {food.photo ? (
                        <img
                            src={`http://localhost:3000/item/getphoto/${food._id}`}
                            alt={`Photo for ${food.name}`}
                            className="w-1/4 h-full"
                        />
                    ) : (
                        <div className="bg-gray-300 w-1/4 h-40 flex items-center justify-center">
                            <p>No Image Available</p>
                        </div>
                    )}
                    <div className="ml-4">
                        <h1 className='font-bold'>{food.name}</h1>
                        <h3 className='font-bold'>{food.price}</h3>
                        {/* <button onClick={likeBlog}>
                            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
                        </button> */}
                        {/* {my && <Link to={`/editblog/${blog._id}`}><h2> Edit</h2></Link>} */}
                        <p>{food.name}</p>
                        <h2 className="mt-4 font-bold">Details</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sed error obcaecati, tempora quam illum nam, voluptate veritatis dolorem odit ut excepturi ipsum similique, nobis ab repudiandae! Quia possimus natus perspiciatis sed accusamus aliquid repellendus?</p>
                       
                       <button className='bg-green-500 p-3 block m-auto mt-14 text-white  rounded-xl cursor-pointer' onClick={Addtocart}>Add to Cart</button>
                        {/* {loadingComments ? (
                            <ClipLoader className='flex items-center justify-center' color="#2196F3" size={30} loading={loadingComments} />
                        ) : (
                            comments.map(comment => (
                                <Comment key={comment._id} comment={comment} mycomment={mycomment} ondelete={()=>deletemycomment(comment._id)}/>
                            ))
                        )} */}
                        {/* <MakeComment content={content}  blogId={id} handleSubmit={handleSubmit} setContent={setContent}/> */}
                    </div>
                   
                </div>
            ) : (
                <p>Blog not found</p>
            )}
        </div>
    );
}

export default Food;
