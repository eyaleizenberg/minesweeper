import {handleActions} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const defaultState = {
  isGameOver: false,
  gameInProgress: false,
};

export const getCellsData = state => state.data;

export default handleActions({
  [ACTIONS.GAME_OVER]: state => {
    return {...state, isGameOver: true};
  }
}, defaultState);
