import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

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

  // Function to handle scroll to the section
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className={`shadow-sm main-navbar py-3 ${scrolled ? 'scrolled' : ''}`}>
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
            {/* Use onClick to trigger smooth scroll */}
            <Nav.Link onClick={() => scrollToSection('home')}>HOME</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>ABOUT</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('services')}>SERVICES</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('showroom')}>SHOWROOM</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('clients')}>CLIENTS</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('ethics')}>ETHICS</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('management')}>MANAGEMENT</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('news')}>NEWS</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
