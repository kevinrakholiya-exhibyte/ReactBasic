import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer = (state, action) => {
        console.log("Current State:", state);
        console.log("Action Received:", action);
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };

            case "decrement":
                return { count: state.count - 1 };

            default:
                return state;
        }
    }
    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState)


    return (

        <div>
            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({ type: "increment" })}>
                +
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                -
            </button>
        </div>

    )
}

export default UseReducer