
import {  createBrowserRouter,  Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import Registor from './Pages/Signup';
import Login from './Pages/Login';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Food from './Pages/Food';
import PrivateRoute from './Pages/PrivateRoute';
import NotFound from './Pages/NotFound';
import Order from './Pages/Order';
import Cart from './Pages/Cart';
// import Dashboard from './Pages/Admin/Dashboard';
// import Forgot from './Pages/Forgot';
// import UpdateProfile from './Pages/User/UpdateProfile'
// import Privateroute from './Pages/PrivateRoute';
// import User from './Pages/User/User';
// import Notfound from './Pages/Notfound';
// import Write from './Pages/User/Write';
// import EditBlog from './Pages/User/EditBlog'
// import AdminRoute from './components/AdminRoute';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/signup' element={<Registor />} />
       <Route path='/login' element={<Login />} />
    
      <Route path='/' element={<Layout />}>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      
        <Route path='/Order' element={<Order/>} />
        {/* <Route path='/Dashboard' element={<Dashboard/>}> */}
          <Route path='/food/:id' element={<PrivateRoute />}>
          <Route path='' element={<Food />} />
         
        </Route> 
        <Route path='/Cart' element={<PrivateRoute />}>
          <Route path='' element={<Cart/>} />
         
        </Route> 
         
        {/* <Route path='/user/:id' element={<User/>} />
        <Route path='/updateprofile/:id' element={<UpdateProfile/>}/>
        <Route path='/writeblog' element={<Write/>}/>
        <Route path='/editblog/:id' element={<EditBlog/>}/> */}
        <Route path= "*" element={<NotFound/>}/> 
        </Route>
        
      
    </>
  )
)
function App() {
  
 

  
  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App