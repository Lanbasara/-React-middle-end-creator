import React, { Component } from 'react';
import { Button } from 'antd'
import './index.less'
import './css.css'
import './scss.scss'
class Home extends Component {
	render() {
		return (
			<div>
				<div className="home">
				Homepage Less
			</div>
			<Button>This is a test of Antd </Button>
			<div className='css'>css</div>
			<div className='less'>less</div>
			<div className='scss'>sass</div>
			</div>
			
		);
	}
}

export default Home;