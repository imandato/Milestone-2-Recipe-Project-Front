import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeGallery = () => {
  const [recipeCards, setRecipeCards] = useState([]);

  useEffect(() => {
      fetchSampleRecipeCards();
  }, []);

  const fetchSampleRecipeCards = () => {
    let sampleCards = [
        {title: "FOO", author: "TOLSTOY", description: "Something", image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"},
        {title: "BAR", author: "PUSHKIN", description: "Something", image: "https://www.simplyrecipes.com/thmb/dYPC5feiBJa7JRXsbf1uM9z0ejc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bucatini-allAmatriciana-LEAD-07-beee4133f7b14a3590ebdeaec6822519.jpg"},
        {title: "BAZZ", author: "PLYUSHKUN", description: "Not Something", image: "https://www.simplyrecipes.com/thmb/r_N7BPB1YXE5V34r77Aw8gcDvNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tahini-Breakfast-Cookies-HorizontalLEAD-2-79065b66216b486188fffd836b60b748.jpg"},
        {title: "TRY", author: "JEROM", description: "Something", image: "https://www.simplyrecipes.com/thmb/K6u810c8jjoFDyKqRy5-MSIhpOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Farro-Mushroom-Bowl-LEAD-11-e93985cd039c40b6a23988e1afc4bf06.jpg"}
    ];  
    setRecipeCards(sampleCards);
  }

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
      <h1>Recipe Gallery</h1>
      <div className='item-container'>
          {recipeCards.map((recipeCard) => (
              <div className='recipe-card' key={recipeCard.id}>
                  <img src={recipeCard.image} alt='' />
                  <h3>{recipeCard.title}</h3>
                  <h3>{recipeCard.author}</h3>
                  <p>{recipeCard.description}</p>
              </div>
          ))}
      </div>
      </div>
  )
}

export default RecipeGallery;



























/*
import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
         recipeCards: []
        }
        this.state.recipeCards = this.loadSampleRecipeCards();
    }

    loadSampleRecipeCards() {
        let recipeCard1 = new RecipeCard();
        return [
            recipeCard1, new RecipeCard(), new RecipeCard()
        ];
    }

    render() {
        return (
            <ul>
                {this.state.recipeCards.map(function(card) {
                    return (
                        <div className='recipe-card'>
                            <h1>{card.title}</h1>
                            <h2>{card.author}</h2>
                            <h3>description</h3>
                        </div>
                    )
                })}
            </ul>
        );
    }
}
*/