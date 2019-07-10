import React from 'react';
import { Layout } from 'antd'
import {
  Route,
  Switch,
} from 'dva/router';
import Home from './home';
import Login from './login';
import './index.less'
const { Header, Content, Footer } = Layout
class Start extends React.Component {
  render() {
    return (
      <div>
        <Header className="header">Header</Header>
        <Content>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </Content>
        <Footer className="footer">Footer</Footer>
      </div>
    )
  }
}

export default Start;