import DashboardCard from "../components/dashboardcard";
import ReportForm from "../components/reportform";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function UserDashboard() {
  return (
    <div className="p-4">
        <Navbar />
      <h2 className="text-2xl font-bold mb-4">Welcome to Roadwise</h2>
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard title="Live Traffic" content="Map or info here" />
        <DashboardCard title="Recent Reports" content="List of your reports" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Submit a Report</h3>
        <ReportForm />
      </div>
    </div>
  );
}

