import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const RecipePage = () => {
  const [recipe, setRecipeById] = useState([]);
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  let { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    fetchRecipeById(id);
}, []);


const fetchRecipeById = (id) => {
  // console.log(id);
  axios
      .get('http://localhost:4001/recipe/'+ id)
      .then((res) => {
        console.log(res.data);
        setRecipeById(res.data);
        setSteps(res.data.steps);
        setIngredients(res.data.ingredients);
      })
      .catch((err) => {
        console.log(err);
      });
};

const mappedSteps = steps.map((step, i) => 
{
return (
  <li key={i}>{step.step_body}</li> 
)
});

const mappedIngredients = ingredients.map((ingredient, i) => 
{
return (
  <li key={i}>{ingredient.name}</li> 
)
});

  return (
    <div>
          <div className='recipe-container' key={recipe.recipe_id}>
            <div>
              <img style={{ width: "300px", height: "auto" }} className='prod-image' src={recipe.image} alt='' />
            </div>
            <div>
              <h1 style={{ textAlign: "left" }} className='title'>{recipe.title}</h1>
              <p style={{ textAlign: "left" }}>
                <strong>Author:</strong> {recipe.author}
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Recipe Description:</strong> {recipe.description}
              </p>
              <p style={{ textAlign: "left" }}>
              <strong>Ingredients: </strong> <ul>{mappedIngredients}</ul>
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Steps:</strong>
                <ul>{mappedSteps}</ul>
              </p>
            </div>
          </div>
      <div className='back'>
        <Link to='/'>Recipe Gallery</Link>
      </div>
    </div>
  );
}

export default RecipePage;
