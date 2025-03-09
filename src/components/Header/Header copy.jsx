import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Import custom styles

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className={`shadow-sm main-navbar py-3 ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/asset/img/logo/ecosourcingLogo.svg"
            alt="EcoSourcing Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#showroom">SHOWROOM</Nav.Link>
            <Nav.Link href="#clients">CLIENTS</Nav.Link>
            <Nav.Link href="#ethics">ETHICS</Nav.Link>
            <Nav.Link href="#management">MANAGEMENT</Nav.Link>
            <Nav.Link href="#news">NEWS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
