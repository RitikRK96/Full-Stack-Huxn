import './App.css';
import { useReducer } from 'react';

function App() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state; 
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br /><br /><button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br /><br /><button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
