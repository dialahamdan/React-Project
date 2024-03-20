import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Cart from './Pages/Cart';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Root from './Routes/Root';
import Products from './Pages/Products';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import CategoryProducts from './Pages/CategoryProducts'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './auth/ProtectedRoutes';
import { useState } from 'react';
import UserContextProvider from './context/User';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root />,
      children:[
        {
          path: "/",
      element:<Home />
        },
        {
          path: "/products",
      element:
        <Products/>
      
        },
        {
          path: "/categories/:id",
      element:<CategoryProducts/>
        },
        {
          path: "/cart",
      element:<ProtectedRoutes>
        <Cart/>
      </ProtectedRoutes>
        },
        {
          path: "/signin",
      element:<Signin/>
        },
        {
          path: "/signup",
      element:<Signup/>
        },
        {
          path: "*",
      element:<NotFound/>
        },

      ]
     
    },
  ]);

  return (
    <>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
     
      <ToastContainer />
    </>
  );
};

export default App;
