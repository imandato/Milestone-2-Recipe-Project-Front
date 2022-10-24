import React from "react";
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';

const Home = () => {
  return(
      <div className="home">
          <SearchForm/>
          <Gallery/>
      </div>
  )
}
export default Home