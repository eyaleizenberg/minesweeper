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
      tempData[id] = {...data[id], isDemon: true, demonId: getRandomNumber(8)};
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

const countDemonInCell = (dataWithDemons, id) => {
  const adjacentCell = dataWithDemons[id];
  if (adjacentCell) {
    return adjacentCell.isDemon ? 1 : 0;
  }

  return 0;
};

const setNumbers = (dataWithDemons, width, height) => {
  const dataWithNumbers = {...dataWithDemons};

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let count = 0;

      [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x + 1, y + 1], [x + 1, y - 1], [x - 1, y + 1], x - 1, y - 1].forEach(coordinates => {
        count += countDemonInCell(dataWithDemons, genXy(coordinates[0], coordinates[1]));
      });
      dataWithNumbers[genXy(x, y)].adjacentDemons = count;
    }
  }

  return dataWithNumbers;
};

const markAllVisible = (data, cellId) => {
  const tempData = {...data};
  Object.keys(tempData).forEach(currentCell => {
    const newCellData = {isExposed: true};

    if (currentCell === cellId) {
      newCellData.isKiller = true;
    }

    tempData[currentCell] = {...tempData[currentCell], ...newCellData};
  });

  return tempData;
};

export const getCellsData = state => state.data;

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    const {width, height} = payload;
    const {sortedData, data} = generateMatrix(width, height);
    const dataWithDemons = conjureDemons(data, state.totalDemons, width, height);
    const dataWithNumbers = setNumbers(dataWithDemons, width, height);
    return {...state, sortedData, data: dataWithNumbers, width, height};
  },
  [ACTIONS.GAME_OVER]: (state, {payload}) => {
    const data = markAllVisible(getCellsData(state), payload.cellId);
    return {...state, data};
  }
}, defaultState);
