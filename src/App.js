import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Play from './pages/Play';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/play" component={ Play } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
