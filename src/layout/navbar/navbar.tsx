import React from 'react';

import NavBrand from './nav-brand';
import NavLink from './nav-link';

class Nav extends React.Component<RazorWindProps.Navigation.Nav, any> {
  render() {
    return (
      <nav className="flex gap-x-10 px-8 py-5 text-white bg-blue-500 shadow-md">
        <NavBrand text={this.props.brand}/>
        <ul className="flex items-center gap-x-4">
          {this.props.links.map(link => (
            <NavLink {...link} key={link.href} />
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav;
