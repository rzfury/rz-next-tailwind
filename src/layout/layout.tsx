import React from 'react';
import Nav from './navbar/navbar';
import SideBar from './sidebar/sidebar';

export default function Layout(props: RazorWindProps.Layout) {
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
      label: 'A',
      href: '/a'
    },
  ];

  return (
    <div className="block">
      <Nav brand="RZ-NextTW" links={navbarLinks} />
      <main className="pt-18">{props.children}</main>
    </div>
  );
}
