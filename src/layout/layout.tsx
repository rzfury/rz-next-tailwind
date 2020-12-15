import React, { useState } from 'react';
import conclass from '../utility/conclass';
import Nav from './navbar/navbar';
import SideBar from './sidebar/sidebar';

const sidebar = false;

export default function Layout(props: RazorWindProps.Layout) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarLinks: RazorWindProps.Navigation.Link[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Examples',
      href: '/examples',
      dropdown: [
        { href: '/button', label: 'Button' },
        { href: '/card', label: 'Card' },
        { href: '/form-control', label: 'Form Control' },
        { href: '/modal', label: 'Modal' },
      ],
    },
    {
      label: 'Empty',
      href: '/empty'
    },
  ];

  const sidebarHandle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex">
      {sidebar && <SideBar show={sidebarOpen} nav={{ brand: "RZ-NextTW" }} links={[{ links: navbarLinks }]}/>}
      {sidebar && <div className="sidebar-backdrop" onClick={sidebarHandle}></div>}
      <div className={conclass('wrapper-main', sidebarOpen && 'sidebar-open')}>
        <Nav sidebar={sidebar} isSidebarOpen={sidebarOpen} onToggleSidebar={sidebarHandle} brand="RZ-NextTW" links={navbarLinks}/>
        <main className="pt-18">{props.children}</main>
      </div>
    </div>
  );
}
