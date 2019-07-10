import React from 'react';
import PropTypes from 'prop-types';
import {
  routerRedux,
  Route,
  Switch,
  HashRouter
} from 'dva/router';
import './index.less'
import Start from './start.js'
const { ConnectedRouter } = routerRedux;
export default function Router({ history }) {
  return (
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route path='/' component={Start} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
