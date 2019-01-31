//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite
import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
}  from 'react-router-dom'
import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class BooksApp extends Component {
  // Setting up Routes to pages
  // If NoMatch - 404 Page rendered  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={ MainPage } />
            <Route path="/search" component={ SearchPage } />
            <Route component={ NoMatch } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp
