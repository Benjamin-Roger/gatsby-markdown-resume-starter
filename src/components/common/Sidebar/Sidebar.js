import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';

import ParticlesBackground from 'components/common/ParticlesBackground';
import config from 'config';

import NavBar from './NavBar';
import SocialLinksContainer from './SocialLinksContainer';
import Avatar from './Avatar';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: config.menu,
      open: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    e.preventDefault();

    this.setState({
      open: !this.state.open,
    });
  }

  render() {

    return (
      <Slide direction="right" timeout={700} in={true}>
        <header className="position-fixed bg-primary p-2 lg-px-4 lg-py-3">
          <nav
            className="navbar navbar-expand-lg navbar-dark flex-3"
            id="sideNav"
          >
            <ParticlesBackground reRender={this.state.open} />

            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={this.toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Avatar />

            <NavBar {...this.state} toggleNav={this.toggleNav} />

            <SocialLinksContainer />
          </nav>
          
        </header>
      </Slide>
    );
  }
}

export default Sidebar;
