import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import Router from '../routes';
import { configureStore } from './configureStore';

const store = configureStore();
const history = createHashHistory();

const Root = () => {
  return (
    <Provider store={ store }>
      <HashRouter >
        <Router history={ history } />
      </HashRouter>
    </Provider>
  );
};

export default Root;
