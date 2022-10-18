import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Gallery from './Components/Gallery';
import RecipeCard from './Components/RecipeCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Form/>
      <Gallery/>
    </div>
  );
}

export default App;
