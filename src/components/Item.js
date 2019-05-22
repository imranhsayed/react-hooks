import React from 'react';

const Item = ( { todo, index, handleItemClick } ) => {

	return (
		<div
			className={ `todo ${ todo.isCompleted ? 'strike-through' : '' }` }
			onClick={() => handleItemClick( index )}
		>
			{ todo.text }
		</div>
	)
};

export default Item;
