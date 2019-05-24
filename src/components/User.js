import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const User = () =>  {

	const initialState = {
		userName: 'imranhsayed',
		age: 28,
		data: {}
	};

	const [userData, setUserData] = useState(initialState);

	const fetchData = (username) => {

		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(resData => setUserData( { ...userData, ...resData } ) );
	};

	useEffect(() => {
		fetchData( userData.userName );
	}, []);


	console.warn( userData );

	return (
		<>
			<h1>Github data</h1>
			{ Object.keys( userData ).length ? (
				<>
					<h3>UserName => { userData.name }</h3>
					<p>Bio => { userData.bio }</p>
					<img src={ userData.avatar_url } alt="Image"/>
				</>
			) : (
				""
			)}
		</>
	);
};

export default User;
