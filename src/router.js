import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd'
import {
  routerRedux,
  Route,
  Switch,
} from 'dva/router';
import Home from './home';
import Login from './login';
import './index.less'
const {ConnectedRouter} = routerRedux;
const { Header, Content, Footer} = Layout
export default function Router({history}) {
  return (
    <ConnectedRouter history={history}>
      <div>
      <Header className="header">Header</Header>
      <Content>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path='/login' component={Login}/>
        <Route path="/home" component={Home} />
      </Switch>
      </Content>
      <Footer className="footer">Footer</Footer>
      </div>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
