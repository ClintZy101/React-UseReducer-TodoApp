import { useReducer, useState } from "react";

const initialState = 0

function init(initialCount) {
  return {count: initialCount};
}

// function addPayload(count, payload){
//   return {count: count  += payload}
// }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'incrementByPayload':
      return {count: state.count + action.payload}
      case 'reset':
        return init(action.payload)
    default:
      throw new Error();
  }
}

export default function CounterComp() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [inputNum, setInputNum] = useState(0)

  return (
    <div style={{marginTop: 10}}>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialState})}>
        Reset
      </button>
      <input type="number" onChange={(e)=> setInputNum(e.target.value)}/>
      <button
        onClick={() => dispatch({type: 'incrementByPayload', payload: parseInt(inputNum) })}>
        Increment By Payload
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

