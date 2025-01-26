import Sidebar from "../components/UI/Sidebar.tsx";

import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="h-screen w-full">
      
      <Sidebar />
      <div className="bg-gray-200 pt-4 px-2 sm:pt-10 sm:px-20 h-full">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminPage;
