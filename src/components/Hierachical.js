import React, { useState, useEffect } from 'react';
import Nav from "./Nav";

const Hierarchical = () => {

	const [ showChild, setChild ] = useState( false );

	const MyChild = () => {

	useEffect( () => {

		console.warn( 'mounted/updated: Do Something( Fetch API, Add Event )' );

		return () => console.warn( 'unmounted: Do Something( Unsuscribe, Remove Event )' );
	} );

		return (
			<div>MyChild Component</div>
		)
	};

	return (
		<div>
			<Nav/>
			<button className="mt-5" onClick={ () => setChild( ! showChild ) }>Togle MyChild</button>
			{ showChild && <MyChild/> }
		</div>
	)
};

export default Hierarchical;
