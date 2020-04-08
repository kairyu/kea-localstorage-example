import './index.css';

import { Provider } from 'react-redux';
import { resetContext, getContext } from 'kea';
import {routerPlugin} from 'kea-router';
import React from 'react';
import ReactDOM from 'react-dom';
import listenersPlugin from 'kea-listeners';
import localStoragePlugin from 'kea-localstorage';

import App from './App';
import * as serviceWorker from './serviceWorker';

resetContext({
  createStore: true,
  plugins: [
    localStoragePlugin,
    routerPlugin(),
    listenersPlugin
  ]
})

ReactDOM.render(
  <Provider store={getContext().store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
