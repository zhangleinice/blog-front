import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { operationReducer } from './opreation-reducer';
import getTopics from './cnode/reduce';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    // 将路由注入reducer
    router: connectRouter(history),
    // 全局操作快照
    operation: operationReducer,
    getTopics
});

export default rootReducer;