import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import App from './App';
import configureStore from './store'
import {ConnectedRouter} from 'react-router-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = configureStore(history);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App}/>
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'));