import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://10.1.2.62:8000/api';

export default class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reportHTML: ''
    };
  }

  componentDidMount() {
    axios.get(API_URL + '/report')
    .then(response => { 
      this.setState({ reportHTML: response.data })
    })
  }

  render() {
    if (this.state.reportHTML) {
      return (<div dangerouslySetInnerHTML={{__html: this.state.reportHTML}} />)
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
 
