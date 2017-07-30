import {handleActions} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const defaultState = {
  data: {},
  width: null,
  height: null
};

export const getData = state => state.data;

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    const data = {};

    for (let x = 0; x < payload.width; x++) {
      for (let y = 0; y < payload.height; y++) {
        data[`${x}-${y}`] = {
          x,
          y,
          isMine: false,
          isExposed: false
        };
      }
    }
    return {...state, ...data};
  }
}, defaultState);
