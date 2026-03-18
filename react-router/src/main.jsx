import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./page/Home.jsx"
import Block from "./page/Block.jsx"
import Contact from "./page/Contact.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Home/>}/>
            <Route path="/block" element={<Block/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>

        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
