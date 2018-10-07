import {types, actions} from '../reducers/prices';
import {join} from 'ramda';

export default store => ({type, payload}) => {
  switch (type) {
    case types.FETCH_PRICES: {
      fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${join(',', payload)}&tsyms=USD,EUR&extraParams=bitfinex_funding_stats`)
          .then(resp => resp.json())
          .then(resp => store.dispatch(actions.fetchPricesSuccess(resp)), e => {
            console.warn('Failed to fetch prices', e);
            store.dispatch(actions.fetchPricesFailure());
          });
      break;
    }
    default:
      break;
  }
}