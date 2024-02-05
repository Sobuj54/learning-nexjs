import Link from "next/link";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-products",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="mr-20">
      <h4 className="text-3xl font-semibold">sidebar</h4>
      <ul className="flex flex-col gap-5">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
