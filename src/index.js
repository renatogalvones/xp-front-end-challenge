import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';
import App from './App';
import * as localstorage from './utils/localstorage';

const store = createStore(reducer);

store.subscribe(() => {
  localstorage.saveState(store.getState());
});

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(app, document.getElementById('root'));
