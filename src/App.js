import React, { Component } from 'react';
import './App.css';
import NewComponent from './NewComponent.js';
import axios from 'axios';

class App extends Component {

  constructor () {
    super()
    this.state = { 
      formulario: ''
     }
     
    this.handleForm = this.handleForm.bind(this)
    }


    handleForm () {
      axios.get('http://10.1.2.62:8000/api')
        .then(response => this.setState({formulario: response.data}))
        console.log(this.state);
    }
    


  render() {    
    return (
      <NewComponent></NewComponent>
    );
  }
}

export default App;
