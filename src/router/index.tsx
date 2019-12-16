import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History} from 'history';
import List from '../page/list/index';
import Detail from '../page/detail/index';

export default (history: History) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component = {() => <List/>} />
                <Route  path = "/list" component = {() => <List/>} />
                <Route  path = "/detail/:id" component = {() => <Detail/>} />
            </Switch>
        </ConnectedRouter>
    );
}; 
