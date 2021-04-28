import React from 'react';
import conclass from '../../utility/conclass';
import NavBrand from '../navbar/nav-brand';

class SideBar extends React.Component<RZNTProps.Sidebar, any> {
  renderNavDropdown = (link: RZNTProps.Navigation.Link) => {
    const dropdown = React.createRef<HTMLDivElement>();
    const toggleHandler = () => {
      const classList = dropdown.current.classList;
      if (classList.contains('collapse')) dropdown.current.classList.remove('collapse');
      else dropdown.current.classList.add('collapse');
    };

    return (
      <div className="block">
        <a onClick={toggleHandler} className="flex justify-between px-4 py-2 text-white hover:bg-blue-500">
          <span>{link.label}</span>
          <svg className="fill-current text-white mt-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="down">
              <path id="arrow" d="M1 4h10L6 9 1 4" />
            </g>
          </svg>
        </a>
        <div ref={dropdown} className="sidebar-dropdown">
          {link.dropdown.map(
            item => (
              <a href={`${!item.noParent ? link.href : ''}${item.href}`} className="block pl-8 pr-2 py-2 text-white hover:bg-blue-500">{item.label}</a>
            )
          )}
        </div>
      </div>
    )
  }

  renderNavigation = () => {
    return (
      <div className="sidebar-nav">
        {this.props.links?.map(
          item => (
            <div className="py-2">
              {item.links.map(
                link => link.dropdown
                  ? this.renderNavDropdown(link)
                  : <div className="block">
                    <a href={link.href} className="block px-4 py-2 text-white hover:bg-blue-500">{link.label}</a>
                  </div>
              )}
            </div>
          )
        )}
      </div>
    );
  }

  render() {
    return (
      <div className={conclass('layout-sidebar', this.props.show && 'open')}>
        <div className="flex w-full justify-center py-5 text-white bg-blue-900 shadow-md">
          <NavBrand text={this.props.nav?.brand} show={this.props.show} />
        </div>
        {this.renderNavigation()}
      </div>
    )
  }
}

export default SideBar;
