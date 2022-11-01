import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function GalleryItem({recipeCard, i}){
    return(
        <Card key={i} style={{ width: '20rem', marginBottom: "10px" }}>
        <div className='recipe-card'>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", textAlign: "left" }}>{recipeCard.title}</Card.Title>
            <Card.Img style={{ height: "190px", maxWidth: "280px", border: "1px solid #E8E9EB", borderRadius: "10px", marginTop: "10px", marginBottom: "10px" }} variant='top' src={recipeCard.image} alt='Food Image' />
            <Card.Text style={{ textAlign: "left", fontWeight: "bold", color: "#b5460f" }} variant="body2" color="text.secondary">{recipeCard.author}</Card.Text>
            <Card.Text style={{ textAlign: "justify" }}>{recipeCard.description}</Card.Text>
            <Button style={{ backgroundColor: "#b5460f", border: "1px solid grey" }} href={`/recipe/${recipeCard.recipe_id}`}>Read more</Button>
          </Card.Body>
        </div>
      </Card>
    )
}

export default GalleryItem;