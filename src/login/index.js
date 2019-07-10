import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd'
class Login extends Component {
	render() {
		return (
			<div className="login">
				<Link to='/home'>
					<Button type="primary">
						To Home
					</Button>
				</Link>
			</div>
		);
	}
}

export default Login;