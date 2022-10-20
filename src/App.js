import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './Components/NavBar';
import IngredientForm from './Components/IngredientForm';
import Gallery from './Components/Gallery';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <IngredientForm/>
      <Gallery/>
    </div>
  );
}

export default App;
