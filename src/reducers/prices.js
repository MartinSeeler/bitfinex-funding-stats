export const types = {
  FETCH_PRICES: 'PRICES/FETCH_PRICES',
  FETCH_PRICES_SUCCESS: 'PRICES/FETCH_PRICES_SUCCESS',
  FETCH_PRICES_FAILURE: 'PRICES/FETCH_PRICES_FAILURE'
};

export const actions = {
  fetchPrices: symbols => ({type: types.FETCH_PRICES, payload: symbols}),
  fetchPricesSuccess: resp => ({type: types.FETCH_PRICES_SUCCESS, payload: resp}),
  fetchPricesFailure: () => ({type: types.FETCH_PRICES_FAILURE}),
};

export const initialState = {
  isFetching: false,
  latest: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRICES:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_PRICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        latest: action.payload
      };
    case types.FETCH_PRICES_FAILURE:
      return initialState;
    default:
      return state;
  }
};
