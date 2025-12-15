import { useState } from 'react'
import './App.css'
import Protect from './Protect route.jsx';
import Blog from './Blog.jsx';
import Home from './Home.jsx';
import View from './View.jsx';
import Navbar from './Navbar.jsx';
import SignUp from './Sign up.jsx';
import SignIn from './Sign in.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={
            <Protect>
              <Blog/>
            </Protect>
          }/>
          <Route path='/view' element={
            <Protect>
              <View/>
            </Protect>
          }/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App