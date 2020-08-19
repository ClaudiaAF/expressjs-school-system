import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DetailsCard from './DetailsCard';
import EditDetails from './EditDetails';
import  Table  from './Table';
import From from '../signUp_Login/Form';
import Login from '../signUp_Login/Login';
import './Dashboard.css';

function Dashboard() {
    return (
        <Fragment >
            {/* <DetailsCard /> */}
            <h1>Welcome Back, Mr Hunt.</h1>

            <Table />
            <DetailsCard />
        </Fragment>
    );
}

export default Dashboard;