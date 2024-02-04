export const metadata = {
  title: "Dashboard | First Next app",
  description: "Nextjs application",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <nav>sidebar of nested dashboard layout</nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
