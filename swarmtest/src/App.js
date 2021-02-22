import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./Home/Home.js";
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route> <Home /> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
