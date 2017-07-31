import {handleActions} from 'redux-actions';
import * as ACTIONS from '../actionTypes';
import genXy from '../../utilities/genXy';

export const defaultState = {
  sortedData: [],
  data: {},
  width: null,
  height: null,
  totalDemons: 10
};

const getRandomNumber = max => Math.floor((Math.random() * 1000) + 1) % max;


const conjureDemons = (data, totalDemons, width, height) => {
  let demonsConjured = 0;
  const tempData = {...data};

  while (demonsConjured < totalDemons) {
    const x = getRandomNumber(width);
    const y = getRandomNumber(height);
    const id = genXy(x, y);

    if (!tempData[id].isDemon) {
      tempData[id] = {...data[id], isDemon: true};
      demonsConjured++;
    }
  }

  return tempData;
};

const generateMatrix = (width, height) => {
  const data = {};
  const sortedData = [];

  for (let x = 0; x < width; x++) {
    sortedData[x] = [];
    for (let y = 0; y < height; y++) {
      const id = genXy(x, y);
      data[id] = {
        id,
        isDemon: false,
        isExposed: false
      };

      sortedData[x].push(id);
    }
  }

  return {
    data,
    sortedData
  };
};


export const getData = state => state.data;

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    const {width, height} = payload;
    const {sortedData, data} = generateMatrix(width, height);
    const dataWithDemons = conjureDemons(data, state.totalDemons, width, height);
    return {...state, sortedData, data: dataWithDemons, width, height};
  }
}, defaultState);
