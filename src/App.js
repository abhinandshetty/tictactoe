import React from 'react';
import './App.css';
import BaseContainer from './components/BaseContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ModeSelection from './components/ModeSelection';
import PieceSelection from './components/PieceSelection';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/mode-selection" component={ModeSelection} />
        <Route exact path="/piece-selection" component={PieceSelection} />
        <Route exact path="/gameplay" component={BaseContainer} />
        <Redirect to="/mode-selection" from="*" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
