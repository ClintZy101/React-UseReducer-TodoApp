import { useReducer } from "react";

const initialState = 0

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};

      case 'reset':
        return init(action.payload)
    default:
      throw new Error();
  }
}

export default function CounterComp() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div style={{marginTop: 10}}>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialState})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

