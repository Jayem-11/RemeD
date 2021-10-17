import React from 'react';
import './App.css';

import {
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom'

import Landing from './pages/Landing'

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={'/'}>
          <Landing/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
     
    
  );
}

export default App;
