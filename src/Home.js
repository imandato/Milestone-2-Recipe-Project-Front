import React from "react";
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import { useState, useEffect } from "react";
import axios from 'axios';



const Home = () => {

  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for your favorite recipes!')
  let [data, setData] = useState([])

// let recipeUrl 
// if(search = ""){
//   recipeUrl = "http://localhost:4000/recipe"
//   }else{
//     recipeUrl =`http://localhost:4000/recipe?title=${search}`
//   }

//   useEffect(()=>{
//       axios
//       .get(`http://localhost:4000/recipe?title=${search}`)
//       .then((res) => {
//         console.log(search)
//         setData(res.data.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
  
// },[setSearch])


useEffect(()=>{

    const fetchData = async () =>{
      const response = await fetch(`https://what-the-chef-backend.herokuapp.com/recipe?title=${search}`)
      const resData = await response.json()
      setData(resData.data)
    }
    fetchData()
  
  
},[search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}

  return(
      <div className="home">
          <SearchForm handleSearch= {handleSearch}/>
          <Gallery data={data}/>
      </div>
  )
}
export default Home