import { useState } from 'react'


import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddBook from './pages/AddBook';
import IsPrivate from './components/IsPrivate';

function App() {


  return (
    <>
      <div className='container'>
      
        <Navbar />

     
        
   
      <Routes>
        <Route path='/'   element={<HomePage/>}/>
        <Route path='/login'   element={<Login/>}/>
        <Route path='/signup'   element={<Signup/>}/>
        <Route path='/addBook'   element={
        <IsPrivate>
          <AddBook/>
        </IsPrivate>
        }/>
      </Routes>
      </div>
    </>
  )
}

export default App
