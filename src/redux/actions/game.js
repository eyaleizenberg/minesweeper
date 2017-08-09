import {createAction} from 'redux-actions';
import * as ACTIONS from '../actionTypes';

export const showNewGameAction = createAction(ACTIONS.SHOW_NEW_GAME_DIALOG);

export const showNewGame = () => dispatch => {
  dispatch(showNewGameAction());
};