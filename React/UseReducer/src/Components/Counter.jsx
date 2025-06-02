import { useReducer, useState } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "incrementByAmount":
            return { count: state.count + action.payload };
        case "decrementByAmount":
            return { count: state.count - action.payload };
        case "reset":
            return { count: 0 }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputvalue, setInputValue] = useState(0)

    const handleIncrement = () => {
        dispatch({ type: "increment" })
    }

    const handleDecrement = () => {
        dispatch({ type: "decrement" })
    }

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputvalue) })
        setInputValue("")
    }

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputvalue) })
        setInputValue("")
    }
    const reset = () => {
        dispatch({ type: "reset" })
    }

    return (
        <div className="counter-container">
            <h2>Count: {state.count}</h2>
            <input
                type="number"
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>


    )
}

export default Counter