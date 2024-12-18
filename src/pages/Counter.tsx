import {useReducer} from 'react';

interface State {
   count: number 
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div className='counter-container'>
      <h1>Welcome to my counter</h1>
      <p>Count: {state.count}</p>
      <div>
        <button type="button" className='primary' onClick={addFive}>Add 5</button>&emsp;
        <button type="button" className='secondary' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
