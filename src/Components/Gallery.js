import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Route, Routes, Link } from 'react-router-dom';

//we’ll use Axios to fetch the data from the URL endpoint
import axios from 'axios';


const RecipeGallery = () => {
  const [recipeCards, setRecipeCards] = useState([]);

  useEffect(() => {
      fetchSampleRecipeCards();
  }, []);

  const fetchSampleRecipeCards = () => {
    let sampleCards = [
        {id: 456, title: "Hawaiian Roll Sliders", author: "TOLSTOY", 
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like', 
        image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"},
        {id: 123, title: "BAR", author: "PUSHKIN", description: "Something", image: "https://www.simplyrecipes.com/thmb/dYPC5feiBJa7JRXsbf1uM9z0ejc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bucatini-allAmatriciana-LEAD-07-beee4133f7b14a3590ebdeaec6822519.jpg"},
        {id: 124, title: "BAZZ", author: "PLYUSHKUN", description: "Not Something", image: "https://www.simplyrecipes.com/thmb/r_N7BPB1YXE5V34r77Aw8gcDvNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tahini-Breakfast-Cookies-HorizontalLEAD-2-79065b66216b486188fffd836b60b748.jpg"},
        {id: 125, title: "TRY", author: "JEROM", description: "Something", image: "https://www.simplyrecipes.com/thmb/K6u810c8jjoFDyKqRy5-MSIhpOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Farro-Mushroom-Bowl-LEAD-11-e93985cd039c40b6a23988e1afc4bf06.jpg"},
        {id: 126, title: "FOO", author: "TOLSTOY", description: "Something", image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"},
        {id: 127, title: "FOO", author: "TOLSTOY", description: "Something", image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"},
        {id: 128, title: "FOO", author: "TOLSTOY", description: "Something", image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"},
        {id: 129, title: "BAZZ", author: "PLYUSHKUN", description: "Not Something", image: "https://www.simplyrecipes.com/thmb/r_N7BPB1YXE5V34r77Aw8gcDvNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tahini-Breakfast-Cookies-HorizontalLEAD-2-79065b66216b486188fffd836b60b748.jpg"}
    ];  
    setRecipeCards(sampleCards);
  }


//accepts our URL endpoint
  const fetchRecipeCards = () => {
    axios
      .get('')
      .then((res) => {
        console.log(res);
        setRecipeCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

return (
  <div>
     <header>
      <h1>Recipe Gallery</h1>
      </header>
      <div className='item-container'>
    {recipeCards.map((recipeCard) => (
      <Card style={{ width: '20rem' }}>
        <div className='recipe-card' key={recipeCard.id}>
          <Card.Title style={{ fontWeight: "bold", textAlign: "left" }}>{recipeCard.title}</Card.Title>
          <Card.Body>
            <Card.Img style={{ height: "190px", width: "275px", border: "1px solid #E8E9EB" }} variant='top' src={recipeCard.image} alt='Food Image' />
            <Card.Text style={{ textAlign: "left", fontWeight: "bold", color: "#b5460f" }} variant="body2" color="text.secondary">{recipeCard.author}</Card.Text>
            <Card.Text style={{ textAlign: "justify" }}>{recipeCard.description}</Card.Text>
            {/* <Button variant="primary">Like</Button> */}
            <Link to={`/recipecards/${recipeCard.id}`}>Read more..</Link> 
          </Card.Body>
        </div>
      </Card>
    ))}
  </div>
  </div>
  )
}

export default RecipeGallery;

