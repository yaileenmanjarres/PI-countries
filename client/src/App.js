import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Welcome } from './components/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path={'/'} exact >
          <Welcome />
        </Route>
        <Route path={'/explore'} exact >
          <div> explore page </div>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
