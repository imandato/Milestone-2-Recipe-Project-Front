import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

function IngredientForm(){
    return(
        <div className='form'>
            <div>
            <Card style={{ width: "600px", minHeight: "428px", marginBottom: "100px", backgroundColor: "rgba(157,47,47,0.4)", marginLeft: "21rem", marginTop: "5rem"}} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "50px", marginBottom: "50px", paddingTop: "50px"}}>
                        <Card.Text style={{ textAlign:"left", fontSize: "2.5em", fontWeight: "bold", }}>
                            Unlock the potential in your fridge.
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em", textAlign:"left"  }}>
                            Add your ingredients below to see what you can make!
                    </Card.Text>
                        <Form style={{alignContent: "left"}}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                                <Form.Control  size="lg" type="text" placeholder="Enter your ingredient" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default IngredientForm