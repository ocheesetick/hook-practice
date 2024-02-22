import { React, useState, useCallback} from "react";
import Search from "./Search";

const UseCallBack = () => {
    const allUsers = ["john", "alex", "shiro", "rin", "yukio"];

    const [users, setUsers] = useState(allUsers);

    const handleShuffle = (array) => {
        setUsers(array.slice().sort(() => Math.random() - 0.5))
    }

    // initial code
    // const handleSearch = (text) => {
    //     const filteredUsers = allUsers.filter((user) =>
    //         user.includes(text)
    //     )
    //     setUsers(filteredUsers)
    // }

    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => user.includes(text));
        setUsers(filteredUsers);
    }, []); // Dependency array. Which changes will it watch.

    return (
        <div className="p-4 grid grid-cols-2 gap-2">
        <span className="col-span-2 text-white font-bold">UseCallBack</span>
            <div className="grid grid-cols-2 gap-4 col-span-2">
                <button
                    className="p-4 font-bold bg-sky-400 rounded-lg col-span-1"
                    onClick={() => handleShuffle(users)}
                >
                    Shuffle
                </button>
                <Search className="col-span-1" onChange={handleSearch} />
            </div>
            <ul className="col-span-1 text-white">
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseCallBack;

/*
    useCallBack
    - is a hook that wraps your function and return a new function that
    is memoized. A new function that is frozen, and identical EVERYTHING in it across renders
    - WHY USE THIS? Because every function are different on every render by default 
    even if it didn't change and is exactly the same, still it will be considered 
    different across every render.
*/
