import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';
import CounterContainer from './containers/container';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <CounterContainer />

      </Provider>
    </div>
  );
}

export default App;
