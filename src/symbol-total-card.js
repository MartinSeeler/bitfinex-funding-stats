import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import functional from 'react-functional';
import {connect} from 'react-redux';
import {pathOr, filter, propEq, map, propOr, sum} from 'ramda';

const SymbolTotalCard = ({symbol, sum, lastPrice}) => <div>{symbol}: {sum} ({sum * lastPrice})</div>;

const options = {
  propTypes: {}
};

const mapStateToProps = (state, {symbol}) => {
  return {
    sum: sum(map(propOr(0, 'value'), filter(propEq('symbol', symbol), pathOr([], ['stats', 'entries'], state)))),
    lastPrice: pathOr(0, ['prices', 'latest', symbol, 'EUR'], state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(functional(SymbolTotalCard, options));
