import {createAction} from 'redux-actions';
import * as ACTIONS from '../../constants/actionTypes';
import {getCellsData} from '../reducers/cells';

export const matrixCreatedAction = createAction(ACTIONS.MATRIX_CREATED);
export const gameOverAction = createAction(ACTIONS.GAME_OVER);
export const exposeCellAction = createAction(ACTIONS.CELL_EXPOSED);

export const initMatrix = opts => dispatch => {
  dispatch(matrixCreatedAction(opts));
};

export const revealCell = cellId => (dispatch, getState) => {
  const cell = getCellsData(getState().cells)[cellId];
  if (cell.isDemon) {
    dispatch(gameOverAction({cellId}));
  } else if (cell.adjacentDemons > 0) {
    dispatch(exposeCellAction({cellId}));
  } else {
    console.log('No adjacentDemons, recurse it!')
  }
};
