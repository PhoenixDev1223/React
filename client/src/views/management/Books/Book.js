import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ShowBookList />} />
        <Route path='/create-book' element={<CreateBook />} />
        <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        <Route path='/show-book/:id' element={<ShowBookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;