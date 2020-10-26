import React, {useEffect, useState, useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import ReactTags from 'react-tag-autocomplete'
import expertData from './data/experts.data.json'

import Findexpert from './components/Findexpert.component'
import Dashboard from './components/Dashboard.component'
import Discussion from './components/Discussion.component'
import Nav from './components/Nav.component'


export const ExpertContext = React.createContext(null)



function App() {

  
  const [experts, setexperts] = useState(expertData)
  
  useEffect(()=>{
  })

  

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/expert">
            <ExpertContext.Provider value={experts}>
              <Findexpert />
            </ExpertContext.Provider>
            
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/discussion" component={Discussion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
