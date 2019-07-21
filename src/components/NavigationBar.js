import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava
} from '@fortawesome/free-brands-svg-icons'

class NavigationBar extends Component {
  renderFacebook = () => {
    return (
      <NavItem>
        <NavLink href='https://www.facebook.com/michaelihwang/'>
          <FontAwesomeIcon icon={faFacebook} />
        </NavLink>
      </NavItem>
    );
  }

  renderInstagram = () => {
    return (
      <NavItem>
        <NavLink href='https://www.instagram.com/michaelihwang/'>
          <FontAwesomeIcon icon={faInstagram} />
        </NavLink>
      </NavItem>
    );
  }

  renderStrava = () => {
    return (
      <NavItem>
        <NavLink href='https://www.strava.com/athletes/43442566'>
          <FontAwesomeIcon icon={faStrava} />
        </NavLink>
      </NavItem>
    );
  }

  renderLinkedIn = () => {
    return (
      <NavItem>
        <NavLink href='https://www.linkedin.com/in/michaelihwang/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </NavLink>
      </NavItem>
    );
  }

  renderGitHub = () => {
    return (
      <NavItem>
        <NavLink href='https://github.com/michaelihwang'>
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <Navbar color='light' light expand='md'>
        <Container>
          <NavbarBrand href='/'>Michael In Jey Hwang</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/home/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/projects/'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/hobbies/'>Hobbies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/resume/'>Resume</NavLink>
            </NavItem>
            {this.renderFacebook()}
            {this.renderInstagram()}
            {this.renderStrava()}
            {this.renderLinkedIn()}
            {this.renderGitHub()}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
