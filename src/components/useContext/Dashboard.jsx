import { Profile, Sidebar } from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="grid grid-flow-row gap-2">
            <div className="p-2 font-bold text-white border-solid border-2 border-violet-400 rounded-lg mb-2">UseContext</div>
            <Sidebar />
            <Profile />
        </div>
    );
};

export default Dashboard;
