import React from 'react';
import { Router } from "@reach/router";
import Home from "./components/Home";
import './Style.css';
import Hierarchical from "./components/Hierachical";


class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/"/>
				<Hierarchical path="/hierarchical"/>
			</Router>
		);
	}
}

export default App;
