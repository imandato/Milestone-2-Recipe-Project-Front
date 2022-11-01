import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./css/gallery.css"


//we’ll use Axios to fetch the data from the URL endpoint
import axios from 'axios';
import GalleryItem from './GalleryItem';

const RecipeGallery = ({data}) => {
  const [recipeCards, setRecipeCards] = useState([]);

  //creates each individule instance in the gallery
  const GalleryMapped = data.map((recipeCard, i) => (
      <GalleryItem recipeCard = {recipeCard} key={i}/>
    ))



return (
  <div>
     <header>
      <h1 style={{ marginBottom: "60px", textAlign: "center" }}>Recipe Gallery</h1>
      </header>
      <div className='item-container'>

        {GalleryMapped}
     
  </div>
  </div>
  )
}

export default RecipeGallery;
