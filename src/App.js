import './App.css';

import { kea, useValues } from 'kea';
import React from 'react';

import PropTypes from 'prop-types';

import logo from './logo.svg';

const logic = kea({
  path: () => ['scenes', 'app'],
  actions: () => ({
    setText: (text) => ({ text })
  }),

  reducers: ({ actions }) => ({
    text: ['Learn React', PropTypes.string, {persist: true}, {
      [actions.setText]: (_, payload) => payload.text
    }]
  }),

  urlToAction: ({ actions }) => ({
    '/:text': ({ text }) => {
      actions.setText(text)
    },
  })
})

function App() {
  const {text} = useValues(logic);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </header>
    </div>
  );
}

export default App;
