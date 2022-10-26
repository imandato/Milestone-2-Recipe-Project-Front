import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import Home from './Home';
import AddRecipe from './Components/AddRecipe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Gallery from './Components/Gallery';
import RecipePage from './Components/RecipePage';
import SearchForm from './Components/SearchForm'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from '@mui/material';

function App() {

  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for your favorite recipes!')
  let [data, setData] = useState([])

  const Data_URL = 'https://recipe-project-back.herokuapp.com/'

  useEffect(() => {
    if(search) {
        const fetchData = async () => {
            const response = await fetch(Data_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
                return setData(resData.results)
            } else {
                return setMessage('Not Found')
            }
        }
        fetchData()
    }
}, [search])

const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}



  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/' element={<SearchForm handleSearch = {handleSearch} />} />
          <Route exact path='/' element={<Gallery />} />
          <Route exact path="/recipe/new" element={<AddRecipe />} />
          <Route exact path='/recipe/:id' element={<RecipePage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
