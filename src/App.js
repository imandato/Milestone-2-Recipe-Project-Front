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
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch } from '@mui/material';

function App() {

 // let [search, setSearch] = useState('')
 // let [message, setMessage] = useState('Search for your favorite recipes!')
 // let [data, setData] = useState([])
//
 // console.log(search)

  //if no search input find all recipes 
  //let Data_URL = 'http://localhost:4000/recipes'
  // if(search == ''){
  // Data_URL = 'http://localhost:4000/'
  // }else{
  //   Data_URL = 'http://localhost:4000/?title='
  // }

  //console.log(data)

 // useEffect(() => {
    // if(search) {
        // const fetchData = async () => {
        //     const response = await fetch("http://localhost:4000/recipes" + search)
        //     const resData = await response.json()
            // if (resData.results.length > 0) {
            //     return setData(resData)
            // } else {
            //     return setMessage('Not Found')
            // }
        //     console.log(resData)
        //     setData(resData)
        // }
        // fetchData()
    //}
//}, [search])

// useEffect(()=>{
//     axios
//       .get('http://localhost:4000/recipe')
//       .then((res) => {
//         console.log(res);
//         setData(res.data.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
  
// },[])

// const handleSearch = (e, term) => {
//     e.preventDefault()
//     setSearch(term)
// }



  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/' element={<SearchForm />} />
          <Route exact path='/' element={<Gallery/>} />
          <Route exact path="/recipe/new" element={<AddRecipe />} />
          <Route exact path='/recipe/:id' element={<RecipePage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
