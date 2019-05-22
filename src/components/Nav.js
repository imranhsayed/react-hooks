import React from 'react';
import { Link } from "@reach/router";

const Nav = () => (
	<div className="navigation">
		<Link to="/" className="nav-item">Home</Link>
		<Link to="/todo" className="nav-item">Todo</Link>
	</div>
);

export default Nav;
