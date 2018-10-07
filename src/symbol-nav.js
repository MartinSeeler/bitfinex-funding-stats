import React from 'react';
import {compose} from 'redux';
import functional from 'react-functional';
import {connect} from 'react-redux';
import SymbolTotalCard from './symbol-total-card';
import {actions as priceActions} from './reducers/prices';
import {sortBy, identity, map, propOr, not, uniq, pathOr, equals} from 'ramda';

const SymbolNav = ({symbols}) => <ul className="nav">
  {symbols.map(symbol => <li key={'symbol-nav-'+symbol} className="nav-item">
    <a className="nav-link disabled" href="#"><SymbolTotalCard symbol={symbol}/></a>
  </li>)}
</ul>;

const options = {
  propTypes: {},
  componentWillUpdate: ({symbols}, {symbols: nextSymbols, fetchSymbolPrices}) => {
    if (not(equals(symbols, nextSymbols)) && nextSymbols.length > 0) {
      fetchSymbolPrices(nextSymbols)
    }
  }
};

const mapStateToProps = (state) => {
  return {
    symbols: sortBy(identity, uniq(map(propOr('', 'symbol'), pathOr([], ['stats', 'entries'], state))))
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSymbolPrices: symbols => {
      dispatch(priceActions.fetchPrices(symbols));
    }
  };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(functional(SymbolNav, options));
