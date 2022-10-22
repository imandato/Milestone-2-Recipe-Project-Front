import './App.css';
import React, {useState} from 'react'
import NavBar from './Components/NavBar';
import Home from './Home';
import AddRecipe from './Components/AddRecipe';
import MyRecipes from './Components/MyRecipes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/recipe/" element={<MyRecipes/>}></Route>
          <Route exact path="/recipe/new" element={<AddRecipe/>}></Route>
      </Routes>
      </Router>
      
     
    </div>
  );
}
export default App;
