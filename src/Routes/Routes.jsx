import React, { Children, Component } from 'react';
import {createBrowserRouter} from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from '../pages/Blogs/Blogs';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/blogs',
        Component:Blogs,
        hydrateFallbackElement:<span className="loading loading-spinner text-primary"></span>,
        loader: () =>fetch('../blogs.json')
      }
     ]
  },
 
]);