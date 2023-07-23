import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styles from "@/components/NavBar.module.css"


function NavBar({showElement}) {

  return (
    <>
  
      <Navbar  sticky="top" className="navbarother">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='../1.svg'
              width="200"
              height="90"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container >
        
        < Nav  activeKey="/home" className="max-width" >

        < Nav.Item>
          <Nav.Link href="/" style={{color:"white"}} 
          className='nav-link'>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{color:"white"}} 
          eventKey="link-2" href='/blogpage'
          className='nav-link'>Blog</Nav.Link>
        </Nav.Item>

        <Dropdown>
        </Dropdown>

        <Nav.Item>
        {showElement ? <Nav.Link style={{color:"white"}} 
        href='/signinpage' 
        className='nav-btn'>Sign in</Nav.Link> : <Card.Img className="card-avatar" src='../aboutus.svg'/>}
        </Nav.Item>

        <Nav.Item>
        <span className="material-symbols-outlined"> </span>
        </Nav.Item>
      </Nav>

      <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
      </Navbar>

      
    </>
  );
}

export default NavBar;