import React from "react";
import IngredientForm from './Components/IngredientForm';
import Gallery from './Components/Gallery';

const Home = () => {
  return(
      <div className="home">
          <IngredientForm/>
          <Gallery/>
      </div>
  )
}
export default Home