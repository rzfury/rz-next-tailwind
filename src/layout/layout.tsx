import React from 'react';
import Nav from './navbar/navbar';
import SideBar from './sidebar/sidebar';

export default function Layout(props: RazorWindProps.Layout) {
  const navbarLinks: RazorWindProps.Navigation.Link[] = [
    {
      label: 'Home',
      href: ''
    },
    {
      label: 'Examples',
      href: '/examples',
      dropdown: [
        { href: '/button', label: 'Button' },
        { href: '/card', label: 'Card' },
        { href: '/form-control', label: 'Form Control' }
      ],
    }
  ];

  if (props.useSideBar) {
    return (
      <div className="flex min-h-screen">
        <SideBar />
        <main className="flex-grow">{props.children}</main>
      </div>
    );
  }
  else {
    return (
      <div className="">
        <Nav brand="RZ-NextTW" links={navbarLinks} />
        <main>{props.children}</main>
      </div>
    );
  }
}
