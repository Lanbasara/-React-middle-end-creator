import React, { Component } from 'react';
import { Button } from 'antd'
import './index.less'
class Home extends Component {
	render() {
		return (
			<div>
				<div className="home">
				Homepage
			</div>
			<Button>This is a test of Antd </Button>
			</div>
			
		);
	}
}

export default Home;