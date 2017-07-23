import {handleActions} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const defaultState = {
  data: {},
};

export const getData = state => state.data;

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    console.log(payload);
    // const update = {
    //   isLoading: { ...state.isLoading, ...{ [fieldAttr]: true } },
    //   error: { ...state.error, ...{ [fieldAttr]: null } },
    // }
    //
    // if (clear) {
    //   update.data = { ...state.data, ...{ [fieldAttr]: null } }
    // }

    return {...state};
  }
}, defaultState);
