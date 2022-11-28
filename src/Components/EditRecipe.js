import React from "react";
import { useState, useEffect } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./css/editrecipe.css"



const EditRecipe = () => {
  
  const Navigate = useNavigate()

  let { id } = useParams();
//store the entire request in state
  const [recipeData, setRecipeData] = useState({});
//the data that will be sent for updateing recipe
  const [updateData, setUpdateData] = useState({})



const [ingredientList, setIngredientList] = useState([]);

  //console.log(ingredientList)

  const handleAddQuantity = () =>{
    setQuantityList([...quantityList,''])
  }
  

  const handleAddIngredient = () =>{
    setIngredientList([...ingredientList, ""])
    handleAddQuantity()
  }

  const handleRemoveIngredient = () =>{
    const list = [...ingredientList]
    list.pop()
    setIngredientList(list)
    const quant = [...quantityList]
    quant.pop()
    setQuantityList(quant)
  }

  const handleIngredientChange = (e, index) =>{
    const {value} = e.target;
    const list = [...ingredientList];
    list[index] = value;
    setIngredientList(list);
    console.log(ingredientList)
  }

  const [quantityList, setQuantityList] = useState([]); 

  const [stepList, setStepList] = useState([]);


  const handleAddStep = () =>{
    setStepList([...stepList, ''])
  }

  const handleRemoveStep = () =>{
    const steps = [...stepList]
    steps.pop()
    setStepList(steps)
  }

  const handleStepChange = (e, index) =>{
    const {value} = e.target;
    const steps = [...stepList];
    steps[index]= value;
    setStepList(steps);
    console.log(stepList)
  }

  const handleQunatityChange = (e, index) =>{
    const {value} = e.target;
    const quant = [...quantityList];
    quant[index] = value;
    setQuantityList(quant);
    console.log(...quantityList)
  }

  useEffect(() => {
    // fetchRecipeById(id);
    getInfo(id);
  }, []);
  
  const getInfo = async (id) =>{
    const response = await fetch('https://what-the-chef-backend.herokuapp.com/recipe/'+ id)
    const resData = await response.json()
    //console.log(resData.steps[0].step_body)
    setRecipeData(resData)
    console.log(recipeData)

    const { ingredients, steps } = resData
    //processing all the nested values for display on page
    const stepArr =[]
    steps.forEach((step, i) =>  stepArr.push(steps[i].step_body))
    setStepList(stepArr)
    //process ingredients
    const ingredientArr =[]
    ingredients.forEach((ingredient,i) => ingredientArr.push(ingredient.name))
    setIngredientList(ingredientArr)
    //proccess quantity
    const quantArr = [];
    ingredients.forEach((ingredient, i) => quantArr.push(ingredient.Recipe_ingredient.quantity))
    setQuantityList(quantArr)

    //sets the data for our update object 
    setUpdateData({title:resData.title,author:resData.author,description:resData.description, image:resData.image})
  }

    return (
      <div style={{display: "flex", justifyContent:"center"}}>
      <Form action={`https://what-the-chef-backend.herokuapp.com/recipe/${id}?_method=PUT`} method='POST'>
          <h1 style={{color: "rgba(157,47,47)", fontWeight: "bolder", marginBottom: "5rem"}}>Edit Recipe : {recipeData.title}!</h1>
          <hr/>
          <Row className="align-items-center" style={{ }}>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formRecipeName">
                  <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Recipe Name</Form.Label>
                  <Form.Control name="title" type="text" value={updateData.title} style={{maxWidth: "31rem"}} onChange={e => setUpdateData({ ...updateData, title: e.target.value })} />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formAuthor">
                  <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Author</Form.Label>
                  <Form.Control type="text" value={updateData.author} name="author" style={{maxWidth: "31rem"}} onChange={e => setUpdateData({ ...updateData, author: e.target.value })} />
                 </Form.Group>
              </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Image</Form.Label>
            <Form.Control type="text" name="image" value={updateData.image} onChange={e => setUpdateData({ ...updateData, image: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Description</Form.Label>
            <Form.Control type="text" name="description" value={updateData.description} as="textarea" rows={3} onChange={e => setUpdateData({ ...updateData, description: e.target.value })}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Ingredients</Form.Label>
           <div className="ingredients-container">
            <div id="ingredients">
            {ingredientList.map((singleIngredient,index)=>(
                <Row key={index} className="align-items-center" style={{ }}>
              <Col xs="auto">
                <InputGroup className="mb-2">
                  <InputGroup.Text>{index+1}</InputGroup.Text>
                    <Form.Control style={{maxWidth:"45rem"}} type="text" name="name" value={singleIngredient} placeholder="Add Ingredient..." onChange={(e)=>handleIngredientChange(e,index)}/>
                  </InputGroup>
                  </Col>
              </Row>
              ))}
              </div>
              <div className="quantitys">
              {quantityList.map((quantity,index)=>{
                return(
                <Col xs="auto" key={index}>
                  <InputGroup className="mb-2">
                    <Form.Label style={{color: "rgba(157,47,47)", padding:".2rem"}}>Quantity</Form.Label>
                    <Form.Control  placeholder="add quantity" value={quantity} type="text" name="quantity" onChange={(e)=>handleQunatityChange(e,index)}/>
                  </InputGroup>
              </Col>
              )})}
              </div>
              </div>
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
             
                <Button className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddIngredient}>
                Add an Ingredient
                </Button>
              
              {ingredientList.length >2 &&(
                <Button className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={()=>handleRemoveIngredient()}>
                Remove an Ingredient
                </Button>
              )}
              </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{ fontWeight: "bolder",color: "rgba(157,47,47)"}}>Steps</Form.Label>
            {stepList.map((singleStep,index)=>(
              <div key={index}>
              <InputGroup className="mb-2"  >
                <InputGroup.Text>{index+1}</InputGroup.Text>
                <Form.Control   placeholder="add a step..." as="textarea" rows={2} name="step_body" value={singleStep} onChange={(e)=>handleStepChange(e,index)}/>
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