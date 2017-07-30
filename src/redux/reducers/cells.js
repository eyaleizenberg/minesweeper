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
    return {...state, ...payload};
  }
}, defaultState);
