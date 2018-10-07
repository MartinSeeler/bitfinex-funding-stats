import {types as statsTypes} from '../reducers/stats';
import {actions as priceActions} from '../reducers/prices';
import {identity, join, map, pathOr, propOr, sortBy, uniq} from 'ramda';

export default store => ({type, payload}) => {
  switch (type) {
    case statsTypes.IMPORT_FILE_SUCCESS: {
      const symbols = sortBy(identity, uniq(map(propOr('', 'symbol'), pathOr([], ['stats', 'entries'], store.getState()))));
      store.dispatch(priceActions.fetchPrices(symbols));
      fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${join(',', symbols)}&tsyms=USD,EUR&extraParams=bitfinex_funding_stats`)
          .then(resp => resp.json())
          .then(resp => store.dispatch(priceActions.fetchPricesSuccess(resp)), e => {
            console.warn('Failed to fetch prices', e);
            store.dispatch(priceActions.fetchPricesFailure());
          });
      break;
    }
    default:
      break;
  }
}