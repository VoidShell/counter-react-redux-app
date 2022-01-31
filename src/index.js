import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./modules";

const state = createStore(rootReducer);

ReactDOM.render(
    <Provider store={state}>
      <App />
    </Provider>,
  document.getElementById('root')
);