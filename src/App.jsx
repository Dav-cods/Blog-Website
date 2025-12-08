import { useState } from 'react'
import './App.css'
import Blog from './Blog.jsx';
import Home from './Home.jsx';
import View from './View.jsx';
import Navbar from './Navbar.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Blog/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App