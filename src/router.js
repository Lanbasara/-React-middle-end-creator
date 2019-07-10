import React from 'react';
import PropTypes from 'prop-types';
import Start from './start.js'
import {
  routerRedux,
  Route,
} from 'dva/router';
import './index.less'
const { ConnectedRouter } = routerRedux;
export default function Router({ history }) {
  return (
        <ConnectedRouter history={history}>
          <Route path='/' component={Start}></Route>
        </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
