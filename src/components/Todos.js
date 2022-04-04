import React, { useEffect, useReducer, useState } from 'react'
import { Todo } from './Todo';

const initialTodos = [
    {
      id: 1,
      name: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      name: "Todo 2",
      complete: false,
    },
  ];

  export const ACTIONS = {
      TOGGLE_TODO: 'toggle-todo',
      ADD_TODO: 'add-todo',
      DELETE_TODO: 'delete-todo'
  }


  const reducer = (state, action) => {
      switch (action.type){
          case ACTIONS.TOGGLE_TODO:
              return state.map((todo)=>{
                  if(todo.id === action.payload.id){
                      return {...todo, complete: !todo.complete}
                  }
                  return todo
              });
            case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)];
           case ACTIONS.DELETE_TODO:
              return state.filter(todo=> todo.id !== action.payload.id)
        default : return state
      }
  }

  function newTodo(name){
      return { id: Date.now(), name: name, complete: false}
  }


export const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [name, setName] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: { name: name}})
        setName('')
    }

    useEffect(()=> {
        console.log(todos)
    }, [todos])
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        </form>
         {
             todos.map((todo)=>(
                 <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
             ))
         }
        </>
    )
}
