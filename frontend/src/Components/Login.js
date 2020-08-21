import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import Index from '../index'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import mdbreact from 'mdbreact'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import './Form.css';


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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXIgSHVudCIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTUxNjIzOTAyMn0.WZ-r-y16SftFtT_25LIdpRkJbkMCLMvbeIflx808IuQ'
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
      <div className="heading-cover">
        <div className="image-cover"></div>
      <h1 className="heading-title">Edgewood Academy Portal</h1>
      </div>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Log in</p>
                <div className="grey-text">

                  <MDBInput
                    label="Your email"
                    onChange={e => onNameChange(e)}
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={name}
                  />

                  <MDBInput
                    label="Your password"
                    onChange={e => onPasswordChange(e)}
                    group
                    type="password"
                    validate
                    value={password}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit" onClick={() => submitForm()}>
                    <Router>
                      <NavLink to="/home" style={{ color: "white" }}> Login</NavLink>
                    </Router>

                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;