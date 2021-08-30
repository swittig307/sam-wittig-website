import React, { useState } from 'react';
import { NavComponent } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faTimes);
const NavSmall = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <button className="hamburger-btn"
        onClick={() => setOpen(!open)}> 
        {open ? <FontAwesomeIcon icon={['fas', 'times']} /> : <FontAwesomeIcon icon={['fas', 'bars']} />}
      </button>
      {/*hide and show the sidebar list based on whether translate is true or false*/}
      <div id="sidebar-list" className={`${open ? "open" : "closed"}`}>
        <NavComponent
          navClass="nav-small"
          linkClass="nav-small-link"
          onClick={() => setOpen(false)}  //set translate to true to hide the sidebar list
        />
      </div>
    </div>

  )
};

export default NavSmall;