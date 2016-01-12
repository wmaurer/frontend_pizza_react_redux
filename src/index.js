import 'babel-polyfill';

require('./app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
