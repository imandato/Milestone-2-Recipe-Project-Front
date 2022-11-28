import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./css/recipepage.css"
import Button from 'react-bootstrap/Button';
import { margin } from '@mui/system';

const RecipePage = () => {
  const [recipe, setRecipeById] = useState([]);
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate()

  let { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    getInfo(id);
}, []);

//fetch the data and break it up into more easy to read labels 
const fetchRecipeById = (id) => {
  // console.log(id);
  axios
      .get('https://what-the-chef-backend.herokuapp.com/'+ id)
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

  const getInfo = async (id) =>{
    const response = await fetch('https://what-the-chef-backend.herokuapp.com/recipe/'+ id)
    const resData = await response.json()
    //console.log(resData.steps[0].step_body)
    setRecipeById(resData);
    setSteps(resData.steps);
    setIngredients(resData.ingredients);
    console.log(resData)
  }

//create a list of all returned steps
const mappedSteps = steps.map((step, i) => 
{
return (
  <li key={i}>{step.step_body}</li> 
)
});

//create multiple table rows depending on reurned ingredients and quanitity 
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

//deletes recipe
async function deleteRecipe() {
  if(window.confirm("Are you sure you want to delete this recipe")){
  await fetch(`https://what-the-chef-backend.herokuapp.com/recipe/${id}`, {
    method: 'DELETE'
  })
  navigate('/')
}
}
  return (
    <div>
          
            <div className='image-container'>
              <img className='prod-image' src={recipe.image} alt='' />
            </div>
            <div className='recipe-container' key={recipe.recipe_id}>
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
              
              <table className='ingredient-table'>
                <tr>
                  <th>Ingredient</th>
                  <th>Quantity</th>
                </tr>
                {mappedIngredients}
                <tfoot></tfoot>
              </table>

              <p style={{ textAlign: "left" }}>
                <strong>Steps:</strong></p>
              <div className='steps-container'>
                <ol>{mappedSteps}</ol>
              </div>
            </div>
          </div>
         <div className='button-container'>
          <Button style={{backgroundColor : "#9d2f2f", margin:"0.5rem"}} onClick={deleteRecipe}>Delete</Button>
          <Link to={`/recipe/${id}/edit`}><Button style={{backgroundColor : "#9d2f2f", margin:"0.5rem"}}>edit recipe</Button></Link>
         </div>
    </div>
  );
}

export default RecipePage;
