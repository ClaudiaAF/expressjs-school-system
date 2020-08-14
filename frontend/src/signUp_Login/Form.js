import React from "react";
import Index from '../index'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import mdbreact from 'mdbreact'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import './Form.css';
import Login from './Login'

const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p>Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Confirm your email"
                                        group
                                        type="text"
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
                                    <MDBContainer>
                                        
                                    <p className="text-center font-weight-lighter" style={{fontSize: "10pt", marginBottom:"50px"}}>Already have an account? Login here.</p>
                                    
                                    </MDBContainer>
                                    <MDBBtn color="cyan" type="submit">
                                        Register
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