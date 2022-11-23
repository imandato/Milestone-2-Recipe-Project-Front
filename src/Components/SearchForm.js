import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import './css/searchform.css'
import { useState } from 'react'
import '../assets/fonts/Roboto-Bold.ttf'

function SearchForm(props){
    
    let [searchTerm, setSearchTerm] = useState('')
    
 

    return(
        <div className='form'>
            <div className='container2'>
            <div className='img-container'>
            <img src="https://t4.ftcdn.net/jpg/03/78/97/59/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg" alt="Card image" />
            </div>
            <Card style={{width:"40%", maxHeight:"358px", maxWidth:"600px"}}>
                    <div className="form-card">
                        <Card.Text style={{ textAlign:"left", fontSize: "2.5rem", fontWeight: "bold", width:"100%" }}>
                            Unlock the potential in your fridge.
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em", textAlign:"left"  }}>
                            Search through our recipes below!
                    </Card.Text>
                        <Form style={{alignContent: "left"}}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                                <Form.Control  size="lg" type="text" placeholder="Your favorite recipe awaits..."  onChange={(e) => props.handleSearch(e, e.target.value)}/>
                            </Form.Group>
                            
                        </Form>  
                    </div>
                </Card>
             </div>
            </div>
    )
}


export default SearchForm