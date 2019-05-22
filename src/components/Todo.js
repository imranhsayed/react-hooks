import React, { useState } from 'react';

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

			</div>
		</div>
	);
};

export default Todo;
