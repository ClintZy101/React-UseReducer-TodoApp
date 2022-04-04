import React from 'react'
import { ACTIONS } from '../components/Todos'

export const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{color: todo.complete ? 'red' : 'green'}}>{todo.name}</span>
            <button onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Todo Complete</button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload:{id: todo.id}})}>DELETE</button>
   </div>
    )
}
