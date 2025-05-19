import DashboardCard from "../components/dashboardcard";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function AdminDashboard() {
  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Admin Control Panel</h2>
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Manage Reports" content="Review/Delete Reports" />
        <DashboardCard title="User Management" content="List of all users" />
        <DashboardCard title="System Logs" content="Recent activities" />
      </div>
    </div>
  );
}
