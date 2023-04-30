import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Components/Context';
import Error from './Components/Error';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Basket from './Components/Basket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "cart",
    element: <Basket />
  }
]);

ReactDOM.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  ,
  document.getElementById('root')
);


