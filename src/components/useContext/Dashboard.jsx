import { Profile, Sidebar } from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="grid grid-flow-row gap-2">
            <span className="p-2 font-bold text-white">UseContext</span>
            <Sidebar />
            <Profile />
        </div>
    );
};

export default Dashboard;
