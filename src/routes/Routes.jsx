import {
    createBrowserRouter,
  } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
      children: [
        {
            path: '/',
            element:  <Home></Home>
        }
      ]
    },
  ]);

