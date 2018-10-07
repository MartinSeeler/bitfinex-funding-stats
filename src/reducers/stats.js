import {anyPass, complement, defaultTo, filter, isNil, map, split, where, equals} from 'ramda';

export const types = {
  IMPORT_FILE: 'STATS/IMPORT_FILE'
};

export const actions = {
  importFile: (content) => ({type: types.IMPORT_FILE, payload: content})
};

export const initialState = {
  entries: []
};

const isValidEntry = where({
  symbol: complement(anyPass([isNil, equals('Currency')])),
  value: complement(anyPass([isNil])),
  time: complement(anyPass([isNil]))
});

const parseLine = (line) => {
  const parts = split(',', line);
  return {
    symbol: parts[0],
    type: parts[1],
    value: defaultTo(0, parseFloat(parts[2])),
    time: parts[3]
  };
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.IMPORT_FILE: {
      return {
        ...state,
        entries: filter(isValidEntry, map(parseLine, split('\n', payload)))
      };
    }
    default:
      return state;
  }
};
