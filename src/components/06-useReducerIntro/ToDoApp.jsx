import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { ToDoAdd } from './ToDoAdd';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const ToDoApp = () => {

    const [todos, dispath] = useReducer(todoReducer, [], init);



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
  
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type : 'delete',
            payload : todoId
        }
        dispath(action);
    }

    const handleToggle = (todoId) => {
        console.log(todoId)
        dispath({
            type :'toggle',
            payload : todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispath({
            type : 'add',
            payload : newTodo
        })
    }

    return (
        <div className='container'>
            <h1>ToDoApp ( { todos.length } ) </h1>
            <hr/>

            <div className = 'row'>
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <ToDoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
