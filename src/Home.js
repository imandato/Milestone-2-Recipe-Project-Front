import React from "react";
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import { useState, useEffect } from "react";
import axios from 'axios';



const Home = () => {

  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for your favorite recipes!')
  let [data, setData] = useState([])



//   useEffect(()=>{
//       axios
//       .get(`http://localhost:4000/recipe?title=${search}`)
//       .then((res) => {
//         console.log('searched')
//         setData(res.data.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
  
// },[search])


useEffect(()=>{
  if(search){
    const fetchData = async () =>{
      const response = await fetch(`http://localhost:4000/recipe?title=${search}`)
      const resData = await response.json()
      setData(resData.data.data)
    }
    fetchData()
  }
  
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