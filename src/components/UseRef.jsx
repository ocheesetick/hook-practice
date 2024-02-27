import { useState, useRef, useEffect } from "react";

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0)
    const inputRef = useRef(null)

    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current++

        console.log("State: ", count)
        console.log("Ref: ", countRef.current)
    }

    useEffect(() => {
        // For when this component mounts, it will trigger the focus to input
        inputRef?.current.focus()
    }, [])

    return (
        <div className="p-4 grid grid-cols-1 gap-4">
            <span className="text-white font-bold border-solid border-2 border-blue-400 rounded-lg p-2">UseRef</span>
            <span className="text-white font-medium ">
                Count: {count}
            </span>

            {/* input focus using ref */}
            <input 
                ref={inputRef} type="text" 
                placeholder="Type here..." 
                className="rounded-md p-2 focus:outline-blue-400"
            />

            {/* Add 1 from count */}
            <button
                className="p-4 font-bold bg-blue-400 rounded-lg"
                onClick={handleIncrement}
            >
                Increment
            </button>
        </div>
    );
};

export default UseRef;

/*
    useRef
    - doesn't trigger re-render
    - not used in the return() body of the component
    - used for values that does not needed for rendering
    - value is always inside `.current`

    useState vs useRef
    - useState's value is one render behind
    - useState's new value is only accessible in the new render
    - if re-render is needed then useState, else useRef

    JS
    - as a scripting language it will do everything in the script first before re-rendering
*/
