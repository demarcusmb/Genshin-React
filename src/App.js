// Importing files
import "./App.css";
import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Character from "./pages/Character";


function App() {

  const [app, setApp] = useState(null);

  const URL = "https://api.genshin.dev/characters"
  
  const getApp = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setApp(data);
  }

  useEffect(() => {
    getApp();
  }, []);


  return (  
  <div className="App">
    <Switch>
          {/* Landing page */}
          <Route exact path="/">
            <Landing />
          </Route>
          {/* Character page */}
          <Route exact path="/character">
            <Character />
          </Route>
    </Switch>
  </div>
  );
}

export default App;
