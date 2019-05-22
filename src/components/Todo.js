import React, { useState } from 'react';
import Item from './Item';
import TodoForm from "./TodoForm";

const Todo = () => {


	const initialState = [
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
	];

	/**
	 * todos: is initial State, whose value will be equal to the array that we pass in useState()
	 * setTodos is like setState
	 */
	const [ todos, setTodos ] = useState( initialState );

	const addToDo = ( text ) => {
		const newToDos = [ ...todos, { text } ];
		setTodos( newToDos );
	};

	return (
		<div className="todo-container">
			<TodoForm addToDo={addToDo}/>
			<div className="todo-list">
				{ todos.length && (
					todos.map( ( item, index ) => (
						<Item
							key={`${item.text}-${index}`}
							todo={item}
						/>
					) )
				) }
			</div>
		</div>
	);
};

export default Todo;
