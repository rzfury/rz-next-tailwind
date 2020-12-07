import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import conclass from '../../utility/conclass';

export default function NavLink(props: RazorWindProps.Navigation.Link) {
  if (props.dropdown) {
    const [active, setActive] = React.useState(false);
    const ref = useRef(null);
    
    const dropdownCloseHandler = (event) => {
      event.button !== 0 && event.preventDefault();
      if(event.key === 'Escape' || event.button === 0) {
        setActive(false);
        document.removeEventListener('keydown', dropdownCloseHandler);
        document.removeEventListener('click', dropdownCloseHandler);
      }
    }

    const dropdownCb = useCallback(
      () => {
        if(active) {
          setActive(false);
          document.removeEventListener('keydown', dropdownCloseHandler);
          document.removeEventListener('click', dropdownCloseHandler);
        }
        else {
          setActive(true);
          document.addEventListener('keydown', dropdownCloseHandler);
          document.addEventListener('click', dropdownCloseHandler);
        }
      },
    [active]);

    const dropdownItems = props.dropdown.map(
      item => (
        <div className="whitespace-no-wrap text-gray-700 hover:bg-gray-200">
          <a href={`${!item.noParent ? props.href : ''}${item.href}`} className="px-4 py-3 block">{item.label}</a>
        </div>
      )
    );

    useEffect(() => {
      return () => {
        document.removeEventListener('keydown', dropdownCloseHandler);
        document.removeEventListener('click', dropdownCloseHandler);
      }
    }, []);

    return (
      <li className="relative">
        <a ref={ref} className="cursor-pointer flex gap-x-1 px-1 py-2 border-b-2 border-blue-500 hover:border-white" onClick={dropdownCb}>
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
