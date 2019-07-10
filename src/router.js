import React from 'react';
import PropTypes from 'prop-types';
import Start from './start.js'
import { AppContainer } from 'react-hot-loader'
import {
  routerRedux,
  Route,
} from 'dva/router';
import './index.less'
const { ConnectedRouter } = routerRedux;
export default function Router({ history }) {
  return (
    <AppContainer>
      <ConnectedRouter history={history}>
        <Route path='/' component={Start}></Route>
      </ConnectedRouter>
    </AppContainer>
  );
}
Router.propTypes = {
  history: PropTypes.object
};
