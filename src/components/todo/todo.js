import './todo.css'
import TodoList from "../todo-list/todolist";
import TodoCreate from "../todo-create/todocreate";
import { useState } from "react";

const Todo = () => {
    const [getTodos, setTodos] = useState ([
        { id: 1, title: 'Eat'},
        { id: 2, title: 'Sleep'},
        { id: 3, title: 'Code'},
    ])

const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
    console.log(getTodos)
}

    return(
        <div>
            <h3> Todo List </h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo ;