import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import BreadcrumbNav from './BreadcrumbNav';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';

function App() {
  return (
    <React.Fragment>
        <div className="container">
        <Navbar  expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home"> <i class="fas fa-tachometer-alt mr-1"></i> Dashboard</Nav.Link>
                    <Nav.Link href="#link"> <i class="fas fa-desktop active mr-1"></i> Websites</Nav.Link>
                    <Nav.Link href="#link"><i class="far fa-edit mr-1"></i> Templates</Nav.Link>
                    <Nav.Link href="#link"><i class="fas fa-question mr-1"></i> Help</Nav.Link>
                </Nav>
                
                <Image src={profile} className="pic" roundedCircle />
                <NavDropdown title="Sandra T." id="basic-nav-dropdown">                
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                
            </Navbar.Collapse>
            </Navbar>
            <div>
                <BreadcrumbNav />
            </div>
        </div>
    </React.Fragment>
  )
}

export default App;
