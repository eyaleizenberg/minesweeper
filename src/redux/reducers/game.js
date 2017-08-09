import {handleActions} from 'redux-actions';
import * as ACTIONS from '../../constants/actionTypes';

export const defaultState = {
  isGameOver: false,
  gameInProgress: false,
  newGameDialogShown: false
};

export const getCellsData = state => state.data;

export default handleActions({
  [ACTIONS.GAME_OVER]: state => {
    return {...state, isGameOver: true};
  },
  [ACTIONS.SHOW_NEW_GAME_DIALOG]: state => {
    return {...state, newGameDialogShown: true};
  },
  [ACTIONS.MATRIX_CREATED]: state => {
    return {...state, newGameDialogShown: false, gameInProgress: true, isGameOver: false};
  }
}, defaultState);
