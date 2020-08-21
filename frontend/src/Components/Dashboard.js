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
import DetailsCard from './DetailsCard'


class Dashboard extends React.Component {
    state = {
        isLoading: true,
        classes: [],
        error: null,
        data: []
    };

    fetchClasses() {
        fetch(`http://localhost:8000/api/classes/teachers/1`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    classes: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchClasses();
    }
    render() {
        const { isLoading, classes, error } = this.state;

        return (
            <Fragment>
                <h1>Your Classes</h1>
                <div className="cover">
                   <div className="header" >
                       <h3 style={{marginLeft:"11.5%"}}>Subject</h3>
                       <h3 style={{marginLeft:"43.5%"}}>Classroom</h3>
                       <h3 style={{marginLeft:"4%"}}>Group</h3>
                   </div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        classes.map(teacherID => {
                            const { subject, group, classroom } = teacherID;
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
                <div><DetailsCard /></div>
                
            </Fragment>
           
            
        );
        

    }
}


export default Dashboard;