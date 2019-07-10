import React from 'react';
import { Layout } from 'antd'
import {
  Route,
  Switch,
  HashRouter
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
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
          </HashRouter>
        </Content>
        
        <Footer className="footer">Footer</Footer>
      </div>
    )
  }
}

export default Start;