import React, { Component } from 'react';
import './App.css';
import NewComponent from './NewComponent.js';
import axios from 'axios'

const API_URL = 'http://10.1.2.62:8000/api';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response =>  {
      this.setState(response.data.data)
    })
  }

  render() {    
    if (this.state) {
      return (
        <NewComponent data={this.state}/>
      );
    }
    else {
      return <div style={divStyle}>Loading...</div>;
    }
  }
}

const divStyle = {
  fontSize: '36px',
  textAlign: 'center',
};

export default App;
