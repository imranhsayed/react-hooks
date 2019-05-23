import React from 'react';
import Nav from "./Nav";
import ThorImage from '../../thor.png';

const Home = () => {
	return (
		<>
			<Nav/>
			<div className="mt-5 container">
				<h2>Welcome!!</h2>

				<div>
					<img src={ThorImage} alt="Thor Image"/>
				</div>
			</div>
		</>
	);
};

export default Home;
