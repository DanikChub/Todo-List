import React, {useState} from 'react';
import './InputUser.css'
const InputUser = ({addTodo, children}) => {

    const [inp, setInput] = useState('');

    const handleChange = (e) => {
		setInput(e.currentTarget.value);
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(inp);
		setInput('');
	}

	const handleKeyPress = (e) => {
		if (e.code == 'Enter') {
			handleSubmit(e);
		}
	
	}
    return (
        <span>
            <form onSubmit={handleSubmit}>
                <input 
                    value={inp}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className='setTodo' 
                    placeholder='New ToDo . . .' 
                    type="text" />
            </form>
            {children}
        </span>
       
    );
};

export default InputUser;