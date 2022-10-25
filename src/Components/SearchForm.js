import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

function IngredientForm(){
    return(
        <div className='form'>
            <div>
            <img style={{ height: "540px", width: "50%", position: "relative", left: "80px", backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "10px", marginBottom: "70px", border: "1px solid #E8E9EB" }} src="https://t4.ftcdn.net/jpg/03/78/97/59/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg" alt="Card image" />
            </div>
            <div style={{ display: "grid", position: "absolute", top: "170px", left: "100px" }}>
            <Card style={{ width: "40rem", minHeight: "428px", marginBottom: "100px", backgroundColor: "#daa7a7", marginLeft: "12rem", marginTop: "5rem" }} className="text-black">
                    <div style={{ top: "auto", width: "30rem", marginLeft: "50px", marginBottom: "50px", paddingTop: "50px"}}>
                        <Card.Text style={{ textAlign:"left", fontSize: "2.5em", fontWeight: "bold", }}>
                            Unlock the potential in your fridge.
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em", textAlign:"left"  }}>
                            Search through our recipes below!
                    </Card.Text>
                        <Form style={{alignContent: "left"}}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                                <Form.Control  size="lg" type="text" placeholder="Your favorite recipe awaits..." />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
             </div>
            </div>
    )
}


export default IngredientForm