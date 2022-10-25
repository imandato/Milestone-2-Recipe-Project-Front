import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipePage = () => {
  const [recipe, setRecipeById] = useState([]);

  useEffect(() => {
    fetchSampleRecipeById();
}, []);

const fetchSampleRecipeById = () => {
  let sampleRecipe = [
      {id: 456, title: "Hawaiian Roll Sliders", author: "TOLSTOY", 
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests', 
      image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"}
  ];  
  setRecipeById(sampleRecipe);
}

const fetchRecipeById = () => {
    axios
      .get('')
      .then((res) => {
        setRecipeById(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
};

  return (
    <div>
      {recipe.map((recipe) => {
        return (
          <div className='recipe-container' key={recipe.id}>
            <div>
              <img style={{ width: "300px", height: "auto" }} className='prod-image' src={recipe.image} alt='' />
            </div>
            <div>
              <h1 style={{ textAlign: "left" }} className='title'>{recipe.title}</h1>
              <p style={{ textAlign: "left" }}>
                <strong>Author:</strong> {recipe.author}
              </p>
              <p>
                <strong>Recipe Steps:</strong> {recipe.description}
              </p>
            </div>
          </div>
        );
      })}
      <div className='back'>
        <Link to='/'>Recipe Gallery</Link>
      </div>
    </div>
  );
}

export default RecipePage;
