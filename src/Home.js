import React from "react";
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import { useEffect, useState } from "react";


const Home = () => {

  return(
      <div className="home">
          <SearchForm />
          <Gallery />
      </div>
  )
}
export default Home