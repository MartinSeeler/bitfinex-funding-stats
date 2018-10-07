import React from 'react';
import {compose} from 'redux';
import functional from 'react-functional';
import {connect} from 'react-redux';
import SymbolTotalCard from './symbol-total-card';
import {sortBy, identity, map, propOr, uniq, pathOr} from 'ramda';

const SymbolNav = ({symbols}) => <ul className="nav">
  {symbols.map(symbol => <li key={'symbol-nav-'+symbol} className="nav-item">
    <a className="nav-link disabled" href="#"><SymbolTotalCard symbol={symbol}/></a>
  </li>)}
</ul>;

const options = {
  propTypes: {}
};

const mapStateToProps = (state) => {
  return {
    symbols: sortBy(identity, uniq(map(propOr('', 'symbol'), pathOr([], ['stats', 'entries'], state))))
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(functional(SymbolNav, options));
