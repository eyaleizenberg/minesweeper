import {handleActions} from 'redux-actions';
import * as ACTIONS from '../../constants/actionTypes';
import {genXy, genSurrounding} from '../../utilities/genXy';

export const defaultState = {
  sortedData: [],
  data: {},
  width: null,
  height: null,
  totalDemons: null
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
        isExposed: false,
        x,
        y
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

      genSurrounding(x, y).forEach(coordinates => {
        count += countDemonInCell(dataWithDemons, coordinates);
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

const traverseFromEmpty = (data, initialCell) => {
  const adjacentCoordinates = genSurrounding(initialCell.x, initialCell.y);
  adjacentCoordinates.forEach(coordinate => {
    const cell = data[coordinate];
    if (cell && !cell.isExposed && !cell.isDemon) {
      data[coordinate].isExposed = true;
      if (!cell.adjacentDemons) {
        traverseFromEmpty(data, data[coordinate]);
      }
    }
  });
};

export default handleActions({
  [ACTIONS.MATRIX_CREATED]: (state, {payload}) => {
    const {width, height, totalDemons} = payload;
    const {sortedData, data} = generateMatrix(width, height);
    const dataWithDemons = conjureDemons(data, totalDemons, width, height);
    const dataWithNumbers = setNumbers(dataWithDemons, width, height);
    return {...state, sortedData, data: dataWithNumbers, width, height, totalDemons};
  },
  [ACTIONS.GAME_OVER]: (state, {payload}) => {
    const data = markAllVisible(getCellsData(state), payload.cellId);
    return {...state, data};
  },
  [ACTIONS.CELL_EXPOSED]: (state, {payload}) => {
    const {cellId} = payload;
    const data = {...state.data};
    data[cellId] = {...data[cellId], isExposed: true};
    return {...state, data};
  },
  [ACTIONS.EMPTY_CELL_EXPOSED]: (state, {payload}) => {
    const {cellId} = payload;
    const data = JSON.parse(JSON.stringify(state.data));
    data[cellId] = {...data[cellId], isExposed: true};
    traverseFromEmpty(data, data[cellId]);
    return {...state, data};
  }
}, defaultState);
