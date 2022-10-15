import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './pages/Landing.jsx';
import Character from './pages/Character';

function App() {
  return (  
  <div>
    <Switch>
          {/* Landing page */}
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/character">
            <Character />
          </Route>
    </Switch>
  </div>
  );
}

export default App;
