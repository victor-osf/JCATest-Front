import React, { Component } from 'react';
import './App.css';
import './helpers/axios-interceptor'
import HomePage from './components/HomePage';
import ReportPage from './components/ReportPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { LoginPage } from './components/LoginPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/about" component={ReportPage} />
        <Route path="/login" component={LoginPage} />
      </BrowserRouter>
    );
  }
}
