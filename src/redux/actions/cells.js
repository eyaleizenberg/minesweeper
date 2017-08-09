import {createAction} from 'redux-actions';
import * as ACTIONS from '../actionTypes';
import {getCellsData} from '../reducers/cells';

export const matrixCreatedAction = createAction(ACTIONS.MATRIX_CREATED);
export const gameOverAction = createAction(ACTIONS.GAME_OVER);

export const initMatrix = () => dispatch => {
  dispatch(matrixCreatedAction({width: 10, height: 10}));
};

export const revealCell = cellId => (dispatch, getState) => {
  const cell = getCellsData(getState().cells)[cellId];
  if (cell.isDemon) {
    dispatch(gameOverAction({cellId}));
  } else if (cell.adjacentDemons > 0) {
    console.log('Has adjacentDemons, expose only it')
  } else {
    console.log('No adjacentDemons, recurse it!')
  }
};
