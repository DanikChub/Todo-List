import { useState, useEffect } from 'react';
import './App.css'
import Todo from '../Todo/Todo';
import InputUser from '../InputUser/InputUser';
import Hints from '../Hints/Hints';

function App() {

	const [todos, setTodos] = useState([]);
	const [h, setH] = useState(450);
	

	const addTodo = (inp) => {
		setTodos(todos => [{text: inp, id: Math.random()}, ...todos]);
	}

	const deleteTodo = (id) => {
		setTodos(todos => [...todos.filter((todo) => todo.id !== id)])
	}

	useEffect(() => {
		if (todos.length > 6) {
			setH(h => h + 75);
		}
		
		
	}, [todos])

	return (
		<div className="app">
			<div className="all">
				<h1 className='title'>TODOS</h1>

				<InputUser addTodo={addTodo}>
					<Hints/>
				</InputUser>

				<div className="blocks" style={{height: h}}>
					{!todos.length && <div className='subTitle'>no todos now</div>}
					{todos.map(todo => {
						return (
							<Todo
								key={todo.id}
								id={todo.id}
								text={todo.text}
								deleteTodo={deleteTodo}
							
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
