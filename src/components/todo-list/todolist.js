import { getByTitle } from '@testing-library/react'
import todo from '../todo/todo'
import './todolist.css'

const Todolist = (props) => {
    console.log(props)
    return (
        <ul>{
            props.dataTodos.map((todo)=>{
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    )
}

export default Todolist