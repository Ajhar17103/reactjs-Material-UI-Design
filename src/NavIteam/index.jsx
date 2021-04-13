import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavIteam = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark"   expand="md">
        <NavbarBrand light>
          <Link  to='/'>Material-UI</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{padding:'10px'}}>
              <Link  to='/album'>Album</Link>
            </NavItem>
            <NavItem style={{padding:'10px', color:'white', textDecorationColor:'none'}}>
              <Link to='pricing'>Pricing</Link>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavIteam;