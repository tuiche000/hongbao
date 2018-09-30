import './App.css';
import React, { Component } from 'react';
import Router from './router/index.js';
import { Provider } from 'react-redux'; // react和redux连接的桥梁，就是这个Provider
import store from './store'; // 引入sotre

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;