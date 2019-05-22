import React from 'react';
import Todo from "./components/Todo";
import { Router } from "@reach/router";
import Home from "./components/Home";
import './Style.css';


class App extends React.Component {
	render() {
		return (
			<Router>
				<Todo path="/todo"/>
				<Home path="/"/>
			</Router>
		);
	}
}

export default App;
