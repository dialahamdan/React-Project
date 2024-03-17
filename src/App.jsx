import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Cart from './Pages/Cart';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Root from './Routes/Root';
import Product from './Pages/Product';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
          path: "/",
      element:<Home/>
        },
        {
          path: "/products",
      element:<Product/>
        },
        {
          path: "/categories",
      element:<Categories/>
        },
        {
          path: "/cart",
      element:<Cart/>
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
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
