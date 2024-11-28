import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {Twirl as Hamburger} from 'hamburger-react';
import { useState } from "react";

const Layout = () => {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleClass = () => {
    setActive(!isActive);
  };

  const linkToggleClass = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    toggleClass();
    let path : any = e.currentTarget.attributes?.getNamedItem('href')?.nodeValue != null 
      ? e.currentTarget.attributes?.getNamedItem('href')?.nodeValue : 
      "/";
    navigate(path);
  }
  return (
    <>
    <header>
      <Hamburger onToggle={toggleClass} />
      <p className="app-title">Phoenix React App</p>
    </header>
      <nav className={ isActive ? "nav-menu mobile-menu" : "nav-menu" }>
        <ul className="nav-menu-items">
          <li>
            <NavLink to="/" onClick={(e) => linkToggleClass(e)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/buttontypes" onClick={(e) => linkToggleClass(e)}>Button Types</NavLink>
          </li>
          <li>
            <NavLink to="/counter" onClick={(e) => linkToggleClass(e)}>Counter</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;