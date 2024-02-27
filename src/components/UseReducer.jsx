import React, { useReducer } from "react";

const initialState = {
    count: 0,
    error: null,
};

function reducer(state, action) {
    const { type } = action;

    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Maximum reached" : null,
            };
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Minimum reached" : null,
            };
        }
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-4 grid grid-cols-1 gap-4">
            <span className="text-white font-bold border-solid border-2 border-orange-400 rounded-lg p-2">
                UseReducer
            </span>
            <span className="text-white font-medium ">Count: {state.count}</span>
            {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}

            {/* Add 1 from count */}
            <button
                className="p-4 font-bold bg-orange-400 rounded-lg"
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </button>
            <button
                className="p-4 font-bold bg-orange-400 rounded-lg"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>
        </div>
    );
};

export default UseReducer;

/*
    useReducer
    - Immutability. Not mutating the state directly, but working on copies of the state
    to make changes to the copies. Then returning that state so that it gets overwritten
    in the actual state.
    - useReducer is very similar to useState, but it lets you move the state update logic 
    from event handlers into a single function outside of your component.

    useReducer(parameters/arguments)
    - 1st argument is Reducer Function
    - 2ns argument is the initial state

    Reducer Function
    - takes in a state/action it will make a copy of the state and based on the action 
    it will do certain things to the state to make some changes, then return to the 
    copy that is then going to go to the state variable through the useReducer hook.
*/
