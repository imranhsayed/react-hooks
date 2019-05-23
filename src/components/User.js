import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const User = () =>  {
	const [username, setUserName] = useState('imranhsayed');
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(data => setUserData(data));
	});

	return (
		<>
			<Nav/>
			<h1>Github data</h1>
			{userData ? (
				<>
					<h3>UserName => {userData.login}</h3>
					<p>Bio => {userData.bio}</p>
					<img src={userData.avatar_url} alt="Image"/>
				</>
			) : (
				""
			)}
		</>
	);
};

export default User;
