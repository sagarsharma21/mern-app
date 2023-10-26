// import logo from './logo.svg';
// import './App.css';

import { Router } from 'express';
import React from 'react'

import CreateBook from '../components/CreateBook';
import ShowBookList from '../components/ShowBookList';
import ShowBookDetails from '../components/ShowBookDetails';
import UpdateBookInfo from '../components/UpdateBookInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
        </Routes>    
      </div>
    </Router>
  )

}

export default App

