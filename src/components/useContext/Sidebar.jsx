import { useContext } from "react";
import { DashboardContext, useUserContext } from "./context";

export function Sidebar() {
  const user = useUserContext()
  return (
    <div className="grid grid-flow-row gap-2">
      <div className="p-2 bg-violet-400 rounded-lg">Sidebar: {user.name}</div>
      <div className="p-2 bg-violet-400 rounded-lg">Subscription Status: {user.isSubscribed.toString()}</div>
    </div>
  );
}

export function Profile() {
  // const user = useContext(DashboardContext) // initial code without custom hook useUserContext
  const user = useUserContext()
  return <div className="p-2 bg-violet-400 rounded-lg">Profile: {user.name}</div>;
}