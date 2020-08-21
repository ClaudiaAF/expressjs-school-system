import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import DetailsCard from './Components/DetailsCard';
import Students from './Components/Students';
import './App.css';
import Dashboard from './Components/Dashboard';

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