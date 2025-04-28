import React, { useState } from "react";
import 'boxicons/css/boxicons.min.css';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from "../assets/logo1.png";

const Header = () => {
  // State to manage the toggle for Track Order
  const [showTracking, setShowTracking] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="w-100" style={{
        backgroundColor: '#6B8E23', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px'

      }}>
        <Container fluid className="d-flex justify-content-between">

          {/* Logo */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Organic Logo" width="100px" height="100px" />
          </Navbar.Brand>

          {/* Navigation Links */}

          {/* Shop by Category Dropdown */}
          <Dropdown className="custom-dropdown">
            <Dropdown.Toggle variant="success" className="dropdown-toggle-custom">Shop by Category</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item as={Link} to="/product?category=Teas%20%26%20Infusion" className="dropdown-item-hover">Teas & Infusions</Dropdown.Item>
              <Dropdown.Item as={Link} to="/product?category=Health%20%26%20Wellness" className="dropdown-item-hover">Health & Wellness</Dropdown.Item>
              <Dropdown.Item as={Link} to="/product?category=Staple%20%26%20Packed Food" className="dropdown-item-hover">Staple & Packed Foods</Dropdown.Item>
              <Dropdown.Item as={Link} to="/product?category=Pulses%20%26%20Dhals" className="dropdown-item-hover">Pulses & Dhals</Dropdown.Item>
              <Dropdown.Item as={Link} to="/product?category=PersonalCare" className="dropdown-item-hover">Personal Care</Dropdown.Item>
              <Dropdown.Item as={Link} to="/product?category=Detox" className="dropdown-item-hover">Detox</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Track Order Toggle */}
          <Nav.Link
            onClick={() => setShowTracking(!showTracking)} // Toggle visibility
            style={{ cursor: "pointer", color: "black" }}
          >
            Track Order
          </Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/support" className='support' style={{ position: 'relative' }}>Support</Nav.Link>
          <Nav.Link as={Link} to="/Register" className="nav-hover">
            <i className='bx bx-group' style={{ fontSize: '25px', color: 'yellow' }}></i>
          </Nav.Link>
          <Nav.Link
            as={Link} to="/cart"
            className={`nav-hover ${location.pathname === '/cart' ? 'active-link' : ''}`}
          >
            <i className="bx bx-cart" style={{ fontSize: '25px', color: 'yellow' }}></i>
          </Nav.Link>

        </Container>
      </Navbar>

      {/* Tracking Section */}
      {showTracking && (
        <div className="tracking-section d-flex align-items-center justify-content-center" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999
        }}>
          <div style={{
            backgroundColor: "white",
            width: "50%",
            height: "auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            position: "relative",
          }}>
            <button
              onClick={() => setShowTracking(false)} // Close the toggle section
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              X
            </button>
            <h5 style={{ textAlign: "center" }}>Track Your Order</h5>
            <input
              type="text"
              placeholder="Enter Order ID / Tracking Number"
              style={{
                padding: "10px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px"
              }}
            />
            <button className="btn btn-success" style={{ width: "100%" }}>Track Order</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
