import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

const UseContext = () => {
    
    const initialUser = {
        isSubscribed: true,
        name: "You",
    }

    const [user, setUser] = useState(initialUser)

    return (
        <div className="p-2 font-medium ">
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    );
};

export default UseContext;

/*
    Common Mistake:
        - is to have long chains of props called Prop Drilling

    useContext
        - to have a data that is shareable and accessible to components
        without having to pass it as props

    Note
        - in this example we need to access the user anywhere in the tree
        instead of passing it as a props
*/
