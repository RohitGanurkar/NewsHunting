import './App.css';
import News from './component/News'
import Navbar from './component/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'


const App =(props) => {

  const page = 12; 
  const apikey = process.env.REACT_APP_NEWS_API;
  const country = "in";

  const [progress, setProgress] = useState(10);

  return (
    <>
    <Router>
    <LoadingBar
      height='3px'
      color='#f11946'
      progress={progress}
    />
    <Navbar/>
    <Switch>
        <Route exact path="/"><News  setProgress={setProgress} apikey={apikey}  key="general" pagesize={page} country={country} category="general"/></Route>
        <Route exact path="/business"><News  setProgress={setProgress} apikey={apikey}   key="business" pagesize={page} country={country} category="business"/></Route>
        <Route exact path="/entertainment"><News  setProgress={setProgress} apikey={apikey}   key="entertainment" pagesize={page} country={country} category="entertainment"/></Route>
        <Route exact path="/health"><News  setProgress={setProgress} apikey={apikey}   key="health" pagesize={page} country={country} category="health"/></Route>
        <Route exact path="/science"><News  setProgress={setProgress} apikey={apikey}   key="science" pagesize={page} country={country} category="science"/></Route>
        <Route exact path="/sports"><News  setProgress={setProgress} apikey={apikey}   key="sports" pagesize={page} country={country} category="sports"/></Route>
        <Route exact path="/technology"><News  setProgress={setProgress} apikey={apikey}   key="technology" pagesize={page} country={country} category="technology"/></Route>
    </Switch>
    </Router>
    </>
  )
}


export default App;