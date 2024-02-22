import { React, useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("")

    // Is guaranteed to run at least once when component is mounted
    useEffect(() => {
        // Some code to run
        setMessage("useEffect Triggered: " + count)

        // Return function is optional. Triggered before destroyed.
        return () => {
            console.log("useEffect about to be destroyed...")
        }
    }, [count]); // Dependencies on what it should react to

    return (
        <div className="p-4 grid grid-cols-1 gap-2">
            <h1 className="text-white font-medium col-span-2">
                {message}
            </h1>

            {/* Add 1 from count */}
            <button
                className="p-4 font-bold bg-red-400 rounded-lg"
                onClick={() => setCount(count + 1)}
            >
                Trigger
            </button>
        </div>
    );
};

export default UseEffect;
