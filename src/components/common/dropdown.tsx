import { useEffect, useRef, useState } from 'react';
import conclass from '../../utility/conclass';
import Button from './button';

export default function Dropdown(props: any) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>();

  const renderDropdownItem = (item: any) => {
    return (
      <a className="block whitespace-nowrap px-4 py-2 hover:bg-gray-200" href={item.href}>{item.label}</a>
    );
  }

  const dropdownCloseHandler = (event) => {
    event.button !== 0 && event.preventDefault();
    if (event.key === 'Escape' || event.button === 0) {
      setActive(false);
      document.removeEventListener('keydown', dropdownCloseHandler);
      document.removeEventListener('click', dropdownCloseHandler);
    }
  };

  const dropdownCb = (e) => {
    setActive(!active);
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
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', dropdownCloseHandler);
      document.removeEventListener('click', dropdownCloseHandler);
    }
  }, []);

  return (
    <div className="relative inline-block">
      <Button {...props.triggerProps} onClick={dropdownCb}>
        <div className="flex items-center">
          <span>{props.label}</span>
          <svg className="fill-current text-white ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="down">
              <path id="arrow" d="M1 4h10L6 9 1 4" />
            </g>
          </svg>
        </div>
      </Button>
      <div ref={dropdownRef} className={conclass('absolute py-2 mt-1 bg-white shadow-md rounded', active ? 'visible' : 'hidden')}>
        {props.links.map((link: any) => renderDropdownItem(link))}
      </div>
    </div>
  );
}
