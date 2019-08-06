import React, { Component } from 'react';

class MyRedio extends React.Component {
    constructor() {
      super();
      
      this.state = {
        size: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({
        size: event.target.value
      });
    }
    
    // handleSubmit(event) {
    //   event.preventDefault();
      
    //   alert(`You chose the ${this.state.size} pizza.`);
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* <p className="title">Select a pizza size:</p> */}
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="small"
                  checked={this.state.size === "small"}
                  onChange={this.handleChange}
                />
                Debit / ATM Card
              </label>
            </li>
            
            <li>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={this.state.size === "medium"}
                  onChange={this.handleChange}
                />
                Credit Card
              </label>
            </li>
          </ul>
  
          {/* <button type="submit" className="submit-button">Make your choice</button> */}
        </form>
      );
    }
  }
  


export default MyRedio;