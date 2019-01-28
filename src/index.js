import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import './index.css';
import AppContainer from './containers/AppContainer';

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('root')
);
