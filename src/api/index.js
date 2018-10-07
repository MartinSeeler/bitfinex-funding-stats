import livePricesApi from './prices-api';
import statsApi from './stats-api';

export default store => next => action => {
    next(action);
    livePricesApi(store)(action);
    statsApi(store)(action);
};
