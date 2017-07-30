import {Provider} from 'react-redux';
import configureStore from '../../redux/store';
import React from 'react';
import MainContainer from '../../containers/MainContainer';

const store = configureStore({});

const minesweeper = () => (
  <Provider store={store}>
    <MainContainer/>
  </Provider>
);

export default minesweeper;
