import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import conclass from '../../utility/conclass';

export default function NavLink(props: RZNTProps.Navigation.Link) {
  const router = useRouter();

  const NavItem = function ({ children }) {
    return props.mobile
      ? (props.dropdown ? <div className="relative">{children}</div> : <div>{children}</div>)
      : (props.dropdown ? <li className="relative">{children}</li> : <li>{children}</li>);
  }

  if (props.dropdown) {
    const [active, setActive] = React.useState(false);
    const ref = useRef(null);
    const itemsRef = useRef(null);

    const dropdownCloseHandler = (event) => {
      event.button !== 0 && event.preventDefault();
      if (event.key === 'Escape' || event.button === 0) {
        setActive(false);
        document.removeEventListener('keydown', dropdownCloseHandler);
        document.removeEventListener('click', dropdownCloseHandler);
      }
    }

    const dropdownCb = (e) => {
      setActive(!active);

      if (!props.mobile) {
        if (active) {
          document.removeEventListener('keydown', dropdownCloseHandler);
          document.removeEventListener('click', dropdownCloseHandler);
          e.stopPropagation();
        }
        else {
          document.addEventListener('keydown', dropdownCloseHandler);
          document.addEventListener('click', dropdownCloseHandler);
          e.stopPropagation();
        }

      }
    };

    const dropdownItems = props.dropdown.map(
      (item, i) => (
        <div key={i} className={conclass(props.mobile ? 'text-white' : 'whitespace-no-wrap text-gray-700 hover:bg-gray-200', router.pathname === `${!item.noParent ? props.href : ''}${item.href}` ? (props.mobile && 'bg-blue-300') : (props.mobile && 'bg-blue-400'))}>
          <a href={`${!item.noParent ? props.href : ''}${item.href}`} className={props.mobile ? 'px-8 py-3 block' : 'px-4 py-2 block'}>{item.label}</a>
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
      <NavItem>
        <a
          ref={ref}
          className={props.mobile
            ? conclass('flex justify-between px-4 py-4', router.pathname === props.href && 'bg-blue-400')
            : conclass('cursor-pointer flex gap-x-1 px-1 py-2 border-b-2', router.pathname === props.href ? 'border-white' : 'border-blue-500 hover:border-white')
          }
          onClick={dropdownCb}
        >
          <span>{props.label}</span>
          <svg className="fill-current text-white mt-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="down">
              <path id="arrow" d="M1 4h10L6 9 1 4" />
            </g>
          </svg>
        </a>
        <div ref={itemsRef} className={conclass('navbar-dropdown', props.mobile ? 'apply-mobile' : 'py-2 min-w-max', props.mobile ? (active && 'collapsed') : (active ? 'visible' : 'hidden'))}>{dropdownItems}</div>
      </NavItem>
    );
  }
  else {
    return (
      <NavItem>
        <Link href={props.href} passHref>
          <a
            className={props.mobile
              ? conclass('flex px-4 py-4', router.pathname === props.href && 'bg-blue-400')
              : conclass('flex px-1 py-2 border-b-2', router.pathname === props.href ? 'border-white' : 'border-blue-500 hover:border-white')
            }
          >
            <>{props.label}</>
          </a>
        </Link>
      </NavItem>
    );
  }
}
