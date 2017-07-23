import {Provider} from 'react-redux';
import configureStore from '../../redux/store';
import React from 'react';
import AppContainer from '../../containers/AppContainer';

const store = configureStore({});

const minesweeper = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

export default minesweeper;
