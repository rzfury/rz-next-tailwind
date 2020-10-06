import React from 'react';

import NavBrand from './nav-brand';
import NavLink from './nav-link';

class Nav extends React.Component<RazorWindProps.Navigation.Nav, any> {
  render() {
    return (
      <nav className="px-8 py-5 bg-blue-500 flex text-white gap-x-10">
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
