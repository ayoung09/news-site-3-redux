import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import sections from '../../config/Sections.json';
class AppNav extends Component {
  _handleClick(value){
    this.props.handleNavClick(value)
  } 
  render() {
    const navItem = sections.map((navItem, index) => {
      return <NavItem id={index} onClick={this._handleClick.bind(this, navItem.value)} key={navItem.label} href='#'>{navItem.label}</NavItem>
    })
    return (
      // <Navbar fixedTop={true}>{navItem}</Navbar>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {navItem}  
          </Nav>
        </Navbar>
    )
  }
}

// class Nav extends Component {
//   render() {
//     console.log(this.props)
//     //this.props.handleNavClick
//     const navItem = this.props.navItems.map((navItem) => {
//       return <a onClick={()=>this.props.handleNavClick(navItem.value)} key={navItem.label} href='#'>{navItem.label}</a>
//     })
//     return (
//       <nav>{navItem}</nav>
//     )
//   }
// }

export default AppNav;