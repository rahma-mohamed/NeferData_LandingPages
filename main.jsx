//rahma mohamed


import React from 'react'
import ReactDOM from 'react-dom/client'

import MissionPage from './Components/MissionPage.jsx'
//import react router for mission page
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MissionPage/> ,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
