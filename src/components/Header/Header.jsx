import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Nav from './Nav';
import NavSmall from './NavSmall';
import { useWindowWidthAndHeight } from '../../hooks/CustomHooks';

const Header = () => {
  const [width, _] = useWindowWidthAndHeight();
  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <header>
        <div className="header-inner">
          <Link to="headshots"
            smooth={true}
            className="header-name">
            Samantha Wittig
          </Link>
          {width < 769 ?
            <NavSmall navClass="nav-small" linkClass="nav-small-link" /> :
            <Nav navClass="nav" linkClass="nav-link" />}
        </div>
      </header>
    </Fade>
  );
}

export default Header;
