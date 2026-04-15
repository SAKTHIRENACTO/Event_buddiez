import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};


export default AdminLayout;