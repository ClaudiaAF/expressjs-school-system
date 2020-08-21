import React, { useState, Fragment } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useParams
} from 'react-router-dom';
import './Navigation.css';
import './Dashboard.css';
import JefferyMedina from './JefferyMedina';



class LynnBrock extends React.Component {
    state = {
        isLoading: true,
        learners: [],
        error: null,
        data: []
    };

    fetchlearners() {
        fetch(`http://localhost:8000/api/classes/learners/2`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    learners: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchlearners();
    }
    render() {
        const { isLoading, learners, error } = this.state;

        return (
            <Fragment>
                <h1>Lynn Brock classes</h1>
                <div className="cover">
                   <div className="header" >
                   <h3 style={{marginLeft:"11.5%"}}>Subject</h3>
                       <h3 style={{marginLeft:"43.5%"}}>Classroom</h3>
                       <h3 style={{marginLeft:"4%"}}>Group</h3>
                   </div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        learners.map(learnerID => {
                            const { subject, classroom, group } = learnerID;
                            return (
                                <Fragment>

                                    <table role="table" className="table" style={{ width: "90%" }}>

                                        <tbody role="rowgroup">
                                            <tr role="row">
                                            <td role="cell" data-title="First name" style={{ paddingLeft: "62px" }}>{subject}</td>
                                                <td role="cell" data-title="Last name">{classroom}</td>
                                                <td role="cell" data-title="Job title">{group}</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </Fragment>
                            );
                        })
                    ) : (
                            <h3>Loading...</h3>
                        )}
                         
                </div>
                <div><JefferyMedina /></div>
                
            </Fragment>
           
            
        );
        

    }
}


export default LynnBrock;