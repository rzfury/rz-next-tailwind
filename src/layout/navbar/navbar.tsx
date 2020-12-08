import React, { useCallback, useState } from 'react';

import NavBrand from './nav-brand';
import NavLink from './nav-link';
import conclass from '../../utility/conclass';

function Nav(props: RazorWindProps.Navigation.Nav) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className="flex gap-x-10 px-8 py-5 text-white bg-blue-500 shadow-md">
      <NavBrand text={props.brand} />
      <ul className="desktop-navbar">
        {props.links.map(link => (
          <NavLink {...link} key={link.href} />
        ))}
      </ul>
      <div className="mobile-navbar">
        <button className="toggle-collapse" onClick={() => setCollapsed(!collapsed)}>
          <div className="toggle-bars-wrapper">
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
          </div>
        </button>
        <div className={conclass('navbar-collapse', collapsed && 'collapsed')}>
          <div className="block pb-20 shadow-md"></div>
          <div className="navbar-items">
            {props.links.map(link => (
              <NavLink {...link} key={link.href} mobile />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
