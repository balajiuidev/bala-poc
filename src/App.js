import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import StepsCard from './pages/StepsCard';
// import StepsCard from './pages/StepsCard';
import StepsForm from './pages/StepsForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Aside">
          <img src="#" alt="Smiley face" height="62" width="200px"></img>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <h3>Welcome to RHB Internet Banking</h3>
                </div>
                <h5>Select your card type</h5>
              {/* <div className="FormTitle">
                  <NavLink to="/Debit-Card" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Debit Card</NavLink> or
                   <NavLink exact to="/Credit-Card" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Credit Card</NavLink>
              </div> */}
              <Route path="/Debit-Card" component={StepsForm}>
              </Route>
              <Route exact path="/Credit-Card" component={StepsCard}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
