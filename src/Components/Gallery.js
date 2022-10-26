import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//we’ll use Axios to fetch the data from the URL endpoint
import axios from 'axios';

const RecipeGallery = () => {
  const [recipeCards, setRecipeCards] = useState([]);

  useEffect(() => {
      // fetchSampleRecipeCards();
      fetchRecipeCards();
  }, []);

  const fetchSampleRecipeCards = () => {
    let sampleCards = [
        {id: 456, title: "Hawaiian Roll Sliders", author: "TOLSTOY", 
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests', 
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
      .get('https://recipe-project-back.herokuapp.com/recipe')
      .then((res) => {
        console.log(res);
        setRecipeCards(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



return (
  <div>
     <header>
      <h1 style={{ marginBottom: "60px", textAlign: "center" }}>Recipe Gallery</h1>
      </header>
      <div className='item-container' style={{marginLeft: "11rem", marginRight: "11rem"}}>
      {recipeCards.map((recipeCard) => (
      <Card style={{ width: '20rem', marginBottom: "10px" }}>
        <div className='recipe-card' key={recipeCard.id}>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", textAlign: "left" }}>{recipeCard.title}</Card.Title>
            <Card.Img style={{ height: "190px", width: "280px", border: "1px solid #E8E9EB", borderRadius: "10px", marginTop: "10px", marginBottom: "10px" }} variant='top' src={recipeCard.image} alt='Food Image' />
            <Card.Text style={{ textAlign: "left", fontWeight: "bold", color: "#b5460f" }} variant="body2" color="text.secondary">{recipeCard.author}</Card.Text>
            <Card.Text style={{ textAlign: "justify" }}>{recipeCard.description}</Card.Text>
            <Button style={{ backgroundColor: "#b5460f", border: "1px solid grey" }} href={`/recipe/${recipeCard.id}`}>Read more</Button>
          </Card.Body>
        </div>
      </Card>
    ))}
  </div>
  </div>
  )
}

export default RecipeGallery;
