import React, { useState } from 'react';

import NavBrand from './nav-brand';
import NavLink from './nav-link';
import conclass from '../../utility/conclass';

function Nav(props: RazorWindProps.Navigation.Nav) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <React.Fragment>
      <nav className={conclass('navbar items-center', props.sidebar ? 'pl-2 pr-8' : 'gap-x-10 px-8')}>
        <button className={conclass(props.sidebar ? 'px-2 mr-2' : 'hidden')} onClick={props.onToggleSidebar}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <NavBrand text={props.brand} show={!props.isSidebarOpen}/>
        <ul className={conclass('desktop-navbar', props.sidebar && 'w-0 overflow-hidden')}>
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
          <button className={conclass('toggle-collapse z-50', props.sidebar && 'hidden')} onClick={() => setCollapsed(!collapsed)}>
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
