import './App.css'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { Welcome } from './components/Welcome/Welcome'
import { Explore } from '../src/components/Explore/Explore'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path={'/'}>
            <Welcome />
          </Route>
          <Route exact path={'/explore'}>
            <Explore />
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
