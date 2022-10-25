import React from "react";
import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const RecipeForm = () => {

  const [ingredientList, setIngredientList] = useState([{ingredient: ""},]);

  console.log(ingredientList)

  const handleAddIngredient = () =>{
    setIngredientList([...ingredientList, {ingredientList:""}])
  }

  const handleRemoveIngredient = (index) =>{
    const list = [...ingredientList]
    list.splice(index,1)
    setIngredientList(list)
  }

  const handleIngredientChange = (e, index) =>{
    const {name, value} = e.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
  }

  const [stepList, setStepList] = useState([{step: ""},]);

  console.log(stepList)

  const handleAddStep = () =>{
    setStepList([...stepList, {stepList:""}])
  }

  const handleRemoveStep = (index) =>{
    const steps = [...stepList]
    steps.splice(index,1)
    setStepList(steps)
  }

  const handleStepChange = (e, index) =>{
    const {name, value} = e.target;
    const steps = [...stepList];
    steps[index][name] = value;
    setStepList(steps);
  }
    return (
        <Form style={{marginLeft: "15rem", marginRight: "15rem"}}>
          <h1 style={{color: "rgba(157,47,47)", fontWeight: "bolder", marginBottom: "5rem"}}>Add Your Own Recipe!</h1>
          <hr/>
          <Row className="align-items-center" style={{display: "flex", justifyContent: "space-around", }}>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formRecipeName">
                  <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Recipe Name</Form.Label>
                  <Form.Control type="text" placeholder="Recipe Name" style={{width: "31rem"}} />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formAuthor">
                  <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Author</Form.Label>
                  <Form.Control type="text" placeholder="Author" style={{width: "31rem"}} />
                 </Form.Group>
              </Col>
          </Row>
          
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Image</Form.Label>
            <Form.Control type="text" placeholder="Image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Ingredients</Form.Label>
            {ingredientList.map((singleIngredient,index)=>(
              <div key={index}>
              
              <Row className="align-items-center" style={{display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                <Col xs="auto">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>{index+1}</InputGroup.Text>
                    <Form.Control style={{width:"45rem"}} id="inlineFormInputGroup" placeholder="Add Ingredient..." name="ingredient" value={singleIngredient.ingredient} onChange={(e)=>handleIngredientChange(e,index)}/>
                  </InputGroup>
                </Col>
                <Col xs="auto">
                <InputGroup className="mb-2">
                    <InputGroup.Text>Quantity</InputGroup.Text>
                    <Form.Control  style={{width:"10rem"}} id="inlineFormInputGroup" placeholder="Quantity" name="quantity" value={singleIngredient.ingredient} onChange={(e)=>handleIngredientChange(e,index)}/>
                  </InputGroup>
                </Col>
              </Row>
              
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
              {ingredientList.length -1 === index &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddIngredient}>
                Add an Ingredient
                </Button>
              )}
              {ingredientList.length -1 === index && ingredientList.length >1 &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={()=>handleRemoveIngredient(index)}>
                Remove an Ingredient
                </Button>
              )}
              </div>
              </div>
            ))}
            
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Steps</Form.Label>
            {stepList.map((singleStep,index)=>(
              <div key={index}>
              <InputGroup className="mb-2">
                <InputGroup.Text>{index+1}</InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Add Step..." as="textarea" rows={2} name="ingredient" value={singleStep.step} onChange={(e)=>handleStepChange(e,index)}/>
              </InputGroup>
              <div style={{display:"flex", flexDirection:"column",justifyContent:"center", }}>
              {stepList.length -1 === index &&(
                <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }} onClick={handleAddStep}>
                Add a Step
                </Button>
              )}
              {stepList.length -1 === index && stepList.length >1 &&(
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
      );
    }    
export default RecipeForm