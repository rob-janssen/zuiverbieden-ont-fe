import Sidebar from "../components/UI/Sidebar.tsx";

import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200 overflow-auto pt-4 px-2 sm:pt-10 sm:px-20 pb-6">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminPage;
