import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./css/recipepage.css"


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
      .get('http://localhost:4000/recipe/'+ id)
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
  <li style={{margin:".5rem"}} key={i}>{step.step_body}</li> 
)
});

const mappedIngredients = ingredients.map((ingredient, i) => 
{
return (
  // <li   key={i}>{ingredient.name}: Quantity:{ingredients[i].Recipe_ingredient.quantity}</li> 
   <tr key={i}>
    <td>{ingredient.name}</td>
    <td>{ingredients[i].Recipe_ingredient.quantity}</td>
   </tr>
)
});

  return (
    <div>
          <div className='recipe-container' key={recipe.recipe_id}>
            <div className='image-container'>
              <img className='prod-image' src={recipe.image} alt='' />
            </div>
            <div className='text-container'>
              <h1 style={{ textAlign: "left" }} className='title'>{recipe.title}</h1>
              <p style={{ textAlign: "left" }}>
                <strong>Author:</strong> {recipe.author}
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Recipe Description:</strong> {recipe.description}
              </p>
              <p>
              <strong><u>Ingredients</u></strong> 
              </p>
              
              <table>
                <tr>
                  <th>Ingredient</th>
                  <th>Quantity</th>
                </tr>
                {mappedIngredients}
              </table>

              <p style={{ textAlign: "left" }}>
                <strong>Steps:</strong></p>

                <ol>{mappedSteps}</ol>
              
            </div>
          </div>
      {/* <div className='back'>
        <Link to='/'>Recipe Gallery</Link>
      </div> */}
    </div>
  );
}

export default RecipePage;
