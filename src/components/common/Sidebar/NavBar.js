import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from 'components/common/Scroll';

const NavBar = ({ tabs, open, toggleNav }) => (
  <div
    className={`mb-2 lg-mb-4 navbar-collapse  ` + (!open ? 'collapse' : '')}
    id="navbarSupportedContent"
  >
    <Scrollspy
      items={tabs.map((tab) => tab.href)}
      currentClassName="active"
      offset={-300}
      className="navbar-nav"
    >
      {tabs.map((tab, key) => {
        const { href, content } = tab;
        return (
          <li className="nav-item" key={key} onClick={toggleNav}>
            <Scroll type="id" element={href}>
              <a className="nav-link" href={`#${href}`}>
                {content}
              </a>
            </Scroll>
          </li>
        );
      })}
    </Scrollspy>
  </div>
);

export default NavBar;
