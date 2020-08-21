import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Form from './signUp_Login/Form';
import Login from './signUp_Login/Login';
import DetailsCard from './dashboard/DetailsCard';
import Students from './dashboard/Students';
import './App.css';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <nav>
            <div className="logo"></div>
            <ul>
            <li>
                <NavLink className="navlink" to="/home">Dashboard</NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/students">Students</NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/">Back to Login / Register</NavLink>
              </li>

              <li style={{float:"right", color:"white", marginTop:"-1%"}}>
                <h6>Welcome Back, Mr Hunt</h6>
              </li>
              
              
            </ul>
          </nav>
          <Switch>
          <Route path="/students">
              <Students />
            </Route>
            <Route path="/home">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;