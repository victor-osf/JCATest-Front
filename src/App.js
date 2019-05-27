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
  
  handleSubmit(event) {
    event.preventDefault();
    const data = event.target
    const body = { 
      baseUrl: data.baseUrl.value,
      userCPF: data.userCPF.value,
      passCPF:  data.passCPF.value,
      userCNPJ: data.userCNPJ.value,
      passCNPJ: data.passCNPJ.value,
      userPassport: data.userPassport.value,
      passPassport: data.passPassport.value,
      userCPFWrong: data.userCPFWrong.value,
      passenger1: data.passenger1.value,
      docPassenger1: data.docPassenger1.value,
      passenger2: data.passenger2.value,
      docPassenger2: data.docPassenger2.value,
      passenger3: data.passenger3.value,
      docPassenger3: data.docPassenger3.value,
      passenger4: data.passenger4.value,
      docPassenger4: data.docPassenger4.value,
      passenger5: data.passenger5.value,
      docPassenger5: data.docPassenger5.value,
      passenger6: data.passenger6.value,
      docPassenger6: data.docPassenger6.value,
      studentCpf: data.studentCpf.value,
      numCard: data.numCard.value,
      valDate: data.valDate.value,
      codCard: data.codCard.value,
      name: data.name.value,
      birth: data.birth.value,
      cpf: data.cpf.value,
      cnpj: data.cnpj.value,
      passport: data.passport.value,
      email: data.email.value,
      pass: data.pass.value,
      ddd: data.ddd.value,
      phoneNumber: data.phoneNumber.value,
      zip: data.zip.value,
      address: data.address.value,
      number: data.number.value,
      complement: data.complement.value,
      neigh: data.neigh.value,
      city: data.city.value,
      country: data.country.value
    }

    axios.put(API_URL, body)
    .then(response =>  {
      alert(response.data.message)
    })
  }

  render() {    
    if (this.state) {
      return (
        <NewComponent data={this.state} handleSubmit={this.handleSubmit.bind(this)}/>
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
