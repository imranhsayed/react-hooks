import React, { useState, useEffect } from 'react';
import Nav from "./Nav";

const Hierarchical = () => {

	const [ showChild, setChild ] = useState( false );

	const MyChild = () => {

		useEffect( () => {

			console.warn( 'mounted' );

			return () => console.warn( 'unmounted' )
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
