import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Form from './Form';
import Index from '../index';


const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
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
                    Login
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