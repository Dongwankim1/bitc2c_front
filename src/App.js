import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './bitc2c_view/home';
import Header from './bitc2c_view/header';
import Footer from './bitc2c_view/footer';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {Home}/>
       
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;