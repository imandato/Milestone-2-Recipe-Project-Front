import React from 'react';
import RecipeCard from './RecipeCard';
import { Image }  from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Gallery(){
    return(
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse Recipes</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>SIDE DISHES</h5>
                            <p style={{ fontWeight: "bold" }} >Hawaiian Roll Sliders with Meat Sauce</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/dYPC5feiBJa7JRXsbf1uM9z0ejc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bucatini-allAmatriciana-LEAD-07-beee4133f7b14a3590ebdeaec6822519.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>DINNER</h5>
                            <p style={{ fontWeight: "bold" }}>Bucatini all'Amatriciana</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/r_N7BPB1YXE5V34r77Aw8gcDvNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tahini-Breakfast-Cookies-HorizontalLEAD-2-79065b66216b486188fffd836b60b748.jpg" roundedCircle />
                        </Col>
                        <Col md="6" style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>EASY BREAKFAST</h5>
                            <p style={{ fontWeight: "bold" }}>Oat and Tahini Breakfast Cookies</p>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/K6u810c8jjoFDyKqRy5-MSIhpOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Farro-Mushroom-Bowl-LEAD-11-e93985cd039c40b6a23988e1afc4bf06.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>LUNCHES</h5>
                            <p style={{ fontWeight: "bold" }}>Farro, Mushroom, and Egg Grain Bowls</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/4sdAXQkMMp2ygTddJVv229DUhrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Apple-Cinnamon-Rolls-LEAD-09-9bb4d2510eb142b49b07e2e7d5c39623.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>DESSERTS</h5>
                            <p style={{ fontWeight: "bold" }}>Apple Cinnamon Rolls</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "200px", width: "300px", border: "1px solid #E8E9EB" }} src="https://www.simplyrecipes.com/thmb/bzuESPMbFMh0Vw49Pfk1UhQk7sU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Tofu-Scramble-Bowl-LEAD-6-52462a889a244bb6a17a622c250b17cd.jpg" roundedCircle />
                        </Col>
                        <Col md="6" style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold", color: "#b5460f" }}>VEGETARIAN</h5>
                            <p style={{ fontWeight: "bold" }}>Vegan Tofu Scramble Burrito Bowl</p>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </div >
    )
}