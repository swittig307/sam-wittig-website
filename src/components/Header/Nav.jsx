import React from 'react';
import { Link } from 'react-scroll';

const Nav = ({ navClass, linkClass }) => (
  <NavComponent navClass={navClass}
    linkClass={linkClass}
  />
);

export const NavComponent = ({ onClick, navClass, linkClass }) => (
  <nav className={navClass}>
    {["headshots", "video", "resume", "contact"].map(section =>
      <Link to={section}
        key={section}
        smooth={true}
        onClick={onClick}
        className={linkClass}>
        {section}
      </Link>
    )}
  </nav>
);

export default Nav;