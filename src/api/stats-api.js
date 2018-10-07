import {types, actions} from '../reducers/stats';
import {anyPass, complement, defaultTo, equals, filter, isNil, map, split, where} from 'ramda';

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

export default store => ({type, payload}) => {
  switch (type) {
    case types.IMPORT_FILE: {
      const entries = filter(isValidEntry, map(parseLine, split('\n', payload)));
      store.dispatch(actions.importFileSuccess(entries));
      break;
    }
    default:
      break;
  }
}