import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'


import { BrowserRouter } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { router } from './routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <RouterProvider router={router} />
  </StrictMode>,
)
