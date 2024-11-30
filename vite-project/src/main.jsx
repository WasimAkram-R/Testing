import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
AOS.init(
  {
    duration:"2000",
    once:true,
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,

//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </React.StrictMode>
)
