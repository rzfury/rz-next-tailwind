import React, { useState } from 'react';

import NavBrand from './nav-brand';
import NavLink from './nav-link';
import conclass from '../../utility/conclass';

function Nav(props: RazorWindProps.Navigation.Nav) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <React.Fragment>
      <nav className="flex items-center fixed w-screen gap-x-10 px-8 py-4 z-50 text-white bg-blue-500 shadow-md">
        <NavBrand text={props.brand} />
        <ul className="desktop-navbar">
          {props.links.map(function (link) {
            return (
              <NavLink {...link} key={link.href} />
            )
          })}
        </ul>
        <div className="mobile-navbar">
          <div className={conclass('navbar-collapse', collapsed && 'collapsed')}>
            <div className="absolute z-40 w-screen pb-18 shadow-md"></div>
            <div className="navbar-items mt-18">
              {props.links.map(function (link) {
                return (
                  <NavLink {...link} key={link.href} mobile />
                )
              })}
            </div>
          </div>
          <button className="toggle-collapse z-50" onClick={() => setCollapsed(!collapsed)}>
            <div className="toggle-bars-wrapper">
              <div className="toggle-bar"></div>
              <div className="toggle-bar"></div>
              <div className="toggle-bar"></div>
            </div>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
