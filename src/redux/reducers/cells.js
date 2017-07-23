import {handleActions} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const defaultState = {
  data: {},
  width: 5,
  height: 5
};

export const getData = state => state.data;

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    return {...state, ...payload};
  }
}, defaultState);
