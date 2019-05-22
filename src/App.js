import React from 'react';
import Todo from "./components/Todo";

import './Style.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<h2 className="main-heading">Todo App</h2>
				<Todo/>
			</div>
		);
	}
}

export default App;
