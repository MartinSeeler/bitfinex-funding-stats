import React from 'react';
import functional from 'react-functional';
import {connect} from 'react-redux';
import {BarChart, Bar, Legend, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import './App.css';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 7000},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 7000},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const App = () => <div>
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">Bitfinex Funding Analyzer</a>
  </nav>
  <div className="container-fluid">
    <br />
    <div className="row">
      <div className="col-md-12">
        <ResponsiveContainer aspect={7}>
          <BarChart data={data}
              margin={{top: 20, right: 30, left: 20, bottom: 5}}>
             <CartesianGrid strokeDasharray="5 5"/>
             <XAxis dataKey="name"/>
             <YAxis/>
             <Tooltip/>
             <Legend />
             <Bar dataKey="pv" stackId="a" fill="#8884d8" />
             <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
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
