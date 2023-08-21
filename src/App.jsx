import { useState } from 'react'


import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddBook from './pages/AddBook';
import IsPrivate from './components/IsPrivate';
import DetailsBook from './pages/DetailsBook';
import EditBook from './pages/EditBook';
import ProfilePage from './pages/ProfilePage';
import ChangePassword from './pages/ChangePassword';

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
          <Route path='/profile'   element={
        <IsPrivate>
          <ProfilePage/>
        </IsPrivate>
        }/>
        <Route path='/changePassword'   element={
        <IsPrivate>
          <ChangePassword/>
        </IsPrivate>
        }/>
          <Route path='/editBook/:id'   element={
        <IsPrivate>
          <EditBook/>
        </IsPrivate>
        }/>
     <Route path='/bookDetails/:id'   element={<DetailsBook/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
