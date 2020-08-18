import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Form from './Form';
import Index from '../index';
import './Form.css'


const FormPage = () => {

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const submitForm = (e) => {
    // get the credentials
    console.log("Submit")
    console.log("UserName", name)
    console.log("Password", password)
    fetch("http://localhost:8000/api/login", {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUnVhbiIsImlkIjoiMTIzMzQ1NTQiLCJpYXQiOjE1OTc2Njg5OTR9.iZU3sUPih1GhYm5M4d8EklJDHFoO2Hoardn6QI6GnKU'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))


    // make request to our server
  }
  const onNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  const onPasswordChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Log in</p>
                <div className="grey-text">
                  
                  <MDBInput
                    label="Your email"
                    
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Your password"
                    
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Log in
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <Form />
    </MDBContainer>
  );
};

export default FormPage;