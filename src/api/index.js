import livePricesApi from './live-prices';

export default store => next => action => {
    next(action);
    livePricesApi(store)(action);
};
