import React from "react";
import { useState, useEffect } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import axios from 'axios';

const EditRecipe = () => {

  let { id } = useParams();

  const [recipeData, setRecipeData] = useState({});





const [ingredientList, setIngredientList] = useState([{ingredient: ""},{ingredient: ""}]);

  //console.log(ingredientList)

  const handleAddIngredient = () =>{
    setIngredientList([...ingredientList, {ingredient:""}])
  }

  const handleRemoveIngredient = (index) =>{
    const list = [...ingredientList]
    list.splice(index,1)
    setIngredientList(list)
  }

  const handleIngredientChange = (e, index) =>{
    const {value} = e.target;
    const list = [...ingredientList];
    list[index]["ingredient"] = value;
    setIngredientList(list);
    console.log(ingredientList)
  }

  const [quantityList, setQuantityList] = useState([]); 

  const [stepList, setStepList] = useState([]);

  //console.log(stepList)

  const handleAddStep = () =>{
    setStepList([...stepList, {step:""}])
    setQuantityList([...quantityList, {quantity:"one"}])
  }

  const handleRemoveStep = (index) =>{
    const steps = [...stepList]
    steps.splice(index,1)
    setStepList(steps)
    const quant = [...quantityList]
    quant.pop()
    setQuantityList(quant)
  }

  const handleStepChange = (e, index) =>{
    const {value} = e.target;
    const steps = [...stepList];
    steps[index]["step"] = value;
    setStepList(steps);
    console.log(stepList)
  }

  const handleQunatityChange = (e, index) =>{
    const {value} = e.target;
    const quant = [...quantityList];
    quant[index]["quantity"] = value;
    setQuantityList(quant);
    console.log(...quantityList)
  }

  useEffect(() => {
    // fetchRecipeById(id);
    getInfo(id);
  }, []);
  
  const getInfo = async (id) =>{
    const response = await fetch('http://localhost:4000/recipe/'+ id)
    const resData = await response.json()
    //console.log(resData.steps[0].step_body)
    setRecipeData(resData)
    console.log(resData)
    const { ingredients, steps } = resData
    //processing all the nested values for display on page
    const stepArr =[]
    steps.forEach((step, i) =>  stepArr.push({step:steps[i].step_body}))
    setStepList(stepArr)
    //process ingredients
    const ingredientArr =[]
    ingredients.forEach((ingredient,i) => ingredientArr.push({ingredient:ingredient.name}))
    setIngredientList(ingredientArr)
    //proccess quantity
    const quantArr = [];
    ingredients.forEach((ingredient, i) => quantArr.push({quantity:ingredient.Recipe_ingredient.quantity}))
    setQuantityList(quantArr)
  }

// console.log(recipeData.steps)
// recipeData.steps.forEach(step => setStepList([...stepList, step.step_body]))


    return (
      <div style={{display: "flex", justifyContent:"center"}}>
        <Form action="http://localhost:4000/recipe" method='POST'>
          <h1 style={{color: "rgba(157,47,47)", fontWeight: "bolder", marginBottom: "5rem"}}>Edit Recipe : {recipeData.title}!</h1>
          <hr/>
          <Row className="align-items-center" style={{ }}>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formRecipeName">
                  <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Recipe Name</Form.Label>
                  <Form.Control name="title" type="text" value={recipeData.title} style={{maxWidth: "31rem"}} />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formAuthor">
                  <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Author</Form.Label>
                  <Form.Control type="text" value={recipeData.author} name="author" style={{maxWidth: "31rem"}} />
                 </Form.Group>
              </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Image</Form.Label>
            <Form.Control type="text" name="image" value={recipeData.image}  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Description</Form.Label>
            <Form.Control type="text" name="description" value={recipeData.description} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Ingredients</Form.Label>
            {ingredientList.map((singleIngredient,index)=>(
              <div key={index}>
                <Row className="align-items-center" style={{ }}>
              <Col xs="auto">
                <InputGroup className="mb-2">
                  <InputGroup.Text>{index+1}</InputGroup.Text>
                    <Form.Control style={{maxWidth:"45rem"}} type="text" name="name" value={singleIngredient.ingredient} placeholder="Add Ingredient..." onChange={(e)=>handleIngredientChange(e,index)}/>
                  </InputGroup>
                  </Col>
                  <Col xs="auto">
                    <InputGroup className="mb-2">
                      <Form.Label style={{color: "rgba(157,47,47)", padding:".2rem"}}>Quantity</Form.Label>
                      <Form.Control  placeholder="add quantity" value={index} type="text" name="quantity" onChange={(e)=>handleQunatityChange(e,index)}/>
                    </InputGroup>
                </Col>
              </Row>
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
              {ingredientList.length -1 === index &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddIngredient}>
                Add an Ingredient
                </Button>
              )}
              {ingredientList.length -1 === index && ingredientList.length >2 &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={()=>handleRemoveIngredient(index)}>
                Remove an Ingredient
                </Button>
              )}
              </div>
              </div>
            ))}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Quantities</Form.Label>
            {ingredientList.map((singleIngredient,index)=>(
              <div key={index}>
              <InputGroup className="mb-2">
                <InputGroup.Text>{singleIngredient.ingredient}</InputGroup.Text>
                {quantityList.map((singleQuantity,index)=>(
                  <div key={index}>
                  <Form.Control  placeholder="Add Quantity..." value={singleQuantity.quantity}  onChange={(e)=>handleQuantityChange(e,index)}/>
                  </div>
                ))}
              </InputGroup>
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
              {stepList.length -1 === index &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddQuantity}>
                Add a Quantity
                </Button>
              )}
              {stepList.length -1 === index && stepList.length >1 &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={()=>handleRemoveQuantity(index)}>
                Remove a Quantity
                </Button>
              )}
              </div>
              </div>
            ))}
            </Form.Group> */}
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Steps</Form.Label>
            {stepList.map((singleStep,index)=>(
              <div key={index}>
              <InputGroup className="mb-2"  >
                <InputGroup.Text>{index+1}</InputGroup.Text>
                <Form.Control   placeholder="add a step..." as="textarea" rows={2} name="step_body" value={singleStep.step} onChange={(e)=>handleStepChange(e,index)}/>
              </InputGroup>
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
              {stepList.length -1 === index &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddStep}>
                Add a Step
                </Button>
              )}
              {stepList.length -1 === index && stepList.length >2 &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={()=>handleRemoveStep(index)}>
                Remove a Step
                </Button>
              )}
              </div>
              </div>
            ))}
            </Form.Group>
          <hr/>
         <Button type="submit" className="mb-2" id="submitbtn" style={{backgroundColor: "rgba(157,47,47)", borderColor: "rgba(157,47,47)", fontWeight:"bolder"}} >
                Submit Recipe
          </Button>
        </Form>
        </div>
      );
    }    
export default EditRecipe