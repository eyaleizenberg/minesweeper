import {combineReducers} from 'redux';
import cells from './cells';
import game from './game';

const rootReducer = combineReducers({
  cells,
  game
});

export default rootReducer;
