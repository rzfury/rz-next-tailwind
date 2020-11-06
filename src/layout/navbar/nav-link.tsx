import React from 'react';
import Link from 'next/link';
import conclass from '../../utility/conclass';

export default function NavLink(props: RazorWindProps.Navigation.Link) {
  if (props.dropdown) {
    const [active, setActive] = React.useState(false);

    const dropdownItems = props.dropdown.map(
      item => (
        <div className="px-4 py-3 whitespace-no-wrap text-gray-700 hover:bg-gray-200">
          <a href={`${!item.noParent ? props.href : ''}${item.href}`} className="block">{item.label}</a>
        </div>
      )
    );

    return (
      <li className="relative">
        <a className="cursor-pointer flex gap-x-1 px-1 py-2 border-b-2 border-blue-500 hover:border-white" onClick={() => setActive(!active)}>
          <span>{props.label}</span>
          <svg className="fill-current text-white mt-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="down">
              <path id="arrow" d="M1 4h10L6 9 1 4" />
            </g>
          </svg>
        </a>
        <div className={conclass('navbar-dropdown py-2', active ? 'visible' : 'hidden')}>{dropdownItems}</div>
      </li>
    );
  }
  else {
    return (
      <li>
        <Link href={props.href} passHref>
          <a className="flex px-1 py-2 border-b-2 border-blue-500 hover:border-white">{props.label}</a>
        </Link>
      </li>
    );
  }
}
