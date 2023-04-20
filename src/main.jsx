import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './components/cartProductLoader';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "orders",
        element: <Orders/>,
        loader: cartProductLoader
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "checkout",
        element: <PrivateRoute><Checkout/></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
   <Toaster />
 </AuthProvider>
  // </React.StrictMode>,
)
