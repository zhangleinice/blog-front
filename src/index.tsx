import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import promiseMiddleware from './middleware/redux-promise';
import rootReducer from './store/index';
import './assets/index.less';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory()
const store =  createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(
            promiseMiddleware(),
            routerMiddleware(history),
        ),
    ),
)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
