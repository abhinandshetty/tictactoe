import React from 'react';
import './App.css';
import BaseContainer from './components/BaseContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={ store }>
    <BaseContainer />
  </Provider>
);

export default App;
