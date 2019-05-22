import React, { useState } from 'react';
import Item from './Item';

const Todo = () => {


	const { todos, setTodos } = useState([
		{
			text: 'Learn Hooks',
			isCompleted: false
		},

		{
			text: 'Get the JS Book',
			isCompleted: false
		},

		{
			text: 'Learn JavaScript',
			isCompleted: false
		},
	]);

	return (
		<div>
			<div className="todo-list">
				{ todos.length && (
					todos.map( ( item, index ) => (
						<Item
							key={`${item.text}-${index}`}
						/>
					) )
				) }
			</div>
		</div>
	);
};

export default Todo;
