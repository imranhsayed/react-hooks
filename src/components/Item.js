import React from 'react';

const Item = ( { todo } ) => {
	return (
		<div className="todo">
			{ todo.text }
		</div>
	)
};

export default Item;
