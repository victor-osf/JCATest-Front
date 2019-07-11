import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ReportPage from './components/ReportPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { LoginPage } from './components/LoginPage';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-12">
            <BrowserRouter>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/about" component={ReportPage} />
              <Route path="/login" component={LoginPage} />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}
