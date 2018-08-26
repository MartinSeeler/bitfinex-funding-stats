import React from 'react';
import functional from 'react-functional';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = () => <div>
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">Bitfinex Funding Analyzer</a>
  </nav>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1>Hello, Bootstrap</h1>
      </div>
    </div>
  </div>
</div>

const options = {
  propTypes: {}
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(functional(App, options));
