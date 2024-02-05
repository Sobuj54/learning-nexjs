import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | First Next app",
  description: "Nextjs application",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
