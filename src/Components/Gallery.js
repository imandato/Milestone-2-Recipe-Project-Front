import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RecipeDisplay from './RecipeDisplay';


//we’ll use Axios to fetch the data from the URL endpoint
import axios from 'axios';
import RecipeForm from './AddRecipe';

const Gallery = (props) => {
// console.log(props)
//   const display = props.data.map((recipeCard, index) => {
//     console.log(recipeCard)
//     return (
//         <RecipeDisplay recipeCard={recipeCard} key={index} />
//     )
// })

return (
  <div>
     <header>
      <h1 style={{ marginBottom: "60px", textAlign: "center" }}>Recipe Gallery</h1>
      </header>
      <RecipeDisplay/>
      {/* {display} */}
  </div>
  )
}

export default Gallery;
