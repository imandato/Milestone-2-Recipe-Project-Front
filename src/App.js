import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import Home from './Home';
import AddRecipe from './Components/AddRecipe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './Components/Gallery';
import RecipePage from './Components/RecipePage';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/' element={<Gallery />} />
          <Route exact path="/recipe/new" element={<AddRecipe />} />
          <Route exact path='/recipe/:id' element={<RecipePage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
