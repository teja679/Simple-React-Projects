import { useState } from 'react'
import "./styles.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const generateId = () => {
        return Math.floor(Math.random() * 100);
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }
    const handleSubmit = () => {
        setTodos(todos => (
            input != '' ? todos.concat({
                text: input,
                id: generateId()
            }) : todos
        )
        );
        setInput('');
        console.log(todos)
    }
    return (
        <div className='container'>
            <div className='input-body'>
                <input className='input' type='text' value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='New To Do' />

                <button className='submit' onClick={handleSubmit}>Submit</button>

            </div>
            <ul className='todos-list'>
                {todos.map(({ text, id }) => (
                    <li key={id} className='todo'>
                        <span>{text}</span>
                        <button className='close' onClick={() => removeTodo(id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
