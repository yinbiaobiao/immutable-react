import React from 'react';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			    <h5 className="title">React的列表渲染问题</h5>
			    <div>React Router: </div>
			    <div><a href="#/list">房间列表</a></div>
			    <div><a href="#/detail">运用ImmutableJs之后的列表</a></div>
			    <div><a href="#/compare">比较immutable与常规操作的copy效率</a></div>
			</div>
		);
	}
}