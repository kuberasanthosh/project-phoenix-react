import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <p className="app-title">Phoenix React App</p>
    </header>
      <nav>
        <ul className="nav-menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/buttontypes">Button Types</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;