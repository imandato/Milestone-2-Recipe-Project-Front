import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//we’ll use Axios to fetch the data from the URL endpoint
import axios from 'axios';

const RecipeDisplay = (props) => {
  
  const [recipeCards, setRecipeCards] = useState([]);

  useEffect(() => {
      // fetchSampleRecipeCards();
      fetchRecipeCards();
  }, []);


//accepts our URL endpoint
  const fetchRecipeCards = () => {
    axios
      .get('http://localhost:4000/recipe')
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

export default RecipeDisplay;
