import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const EditRecipe = () => {
    return (
        <Form style={{marginLeft: "21rem", marginRight: "21rem"}}>
          <h1 style={{color: "rgba(157,47,47)", fontWeight: "bolder", marginBottom: "5rem"}}>Edit Your Recipe!</h1>
          <hr/>
          <Row className="align-items-center" style={{display: "flex", justifyContent: "space-around", }}>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formRecipeName">
                  <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Recipe Name</Form.Label>
                  <Form.Control type="text" placeholder="Recipe Name" style={{width: "38rem"}} />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="formAuthor">
                  <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Author</Form.Label>
                  <Form.Control type="text" placeholder="Author" style={{width: "38rem"}} />
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
            <InputGroup className="mb-2">
                <InputGroup.Text>1</InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Add Ingredient..." />
              </InputGroup>
          </Form.Group>
          <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }}>
                Add an Ingredient
          </Button>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label style={{display: "flex", justifyContent: "start", fontWeight: "bolder",color: "rgba(157,47,47)"}}>Steps</Form.Label>
            <InputGroup className="mb-2">
                <InputGroup.Text>1</InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" placeholder="Add Step..." as="textarea" rows={2} />
              </InputGroup>
          </Form.Group>
          <Button type="submit" className="mb-2" style={{color: "rgba(157,47,47)", backgroundColor:"#F9F9ED", borderColor: "rgba(157,47,47)" }}>
                Add a Step
          </Button>
          <hr/>
          <Button type="submit" className="mb-2" id="submitbtn" style={{backgroundColor: "rgba(157,47,47)", borderColor: "rgba(157,47,47)", fontWeight:"bolder"}} >
                Submit Recipe
          </Button>
        </Form>
      );
    }    
export default EditRecipe