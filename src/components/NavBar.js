import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 h-24">
      <h3 className="text-xl font-bold uppercase">next js</h3>
      <ul className="flex gap-10">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink
              exact={path === "/"}
              activeClassName="text-blue-500"
              href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
