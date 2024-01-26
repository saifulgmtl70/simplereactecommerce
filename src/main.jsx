import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import 'swiper/css';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Shop from './Components/Pages/Shop/Shop.jsx';
import Blog from './Components/Pages/Blog/Blog.jsx';
import About from './Components/Pages/About/About.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import SeeProduct from './Components/Pages/Shop/SeeProduct.jsx';
import Cart from './Components/Pages/Cart/Cart.jsx';
import SingleBlog from './Components/Pages/Blog/SingleBlog.jsx';
import Login from './Components/Authentication/Login/Login.jsx';
import Signup from './Components/Authentication/SignUp/Signup.jsx';
import Authprovider from './Components/Provider/Authprovider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path : '/shop/:id',
        element: <SeeProduct/>
      },
      {
        path: '/cart',
        element: <PrivateRoute> <Cart/> </PrivateRoute>
      },
      
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/blog/:id',
        element: <SingleBlog/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <Signup/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
        <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
