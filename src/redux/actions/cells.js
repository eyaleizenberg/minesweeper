import {createAction} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const matrixCreatedAction = createAction(ACTIONS.MATRIX_CREATED);

export const initMatrix = () => dispatch => {
  dispatch(matrixCreatedAction({width: 10, height: 10}));
};
