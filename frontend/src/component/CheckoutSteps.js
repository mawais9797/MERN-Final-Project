import React from "react";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../index.css";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4 menu">
      <Nav.Item>
        <Button className="navItem btn-danger rounded">
          {step1 ? (
            <LinkContainer className="navLink" to="/login">
              <Nav.Link> Sign In </Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Sign In</Nav.Link>
          )}
        </Button>
      </Nav.Item>

      <Nav.Item>
        <Button className="navItem btn-danger rounded">
          {step2 ? (
            <LinkContainer className="navLink" to="/shipping">
              <Nav.Link>Shipping</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Button>
      </Nav.Item>

      <Nav.Item>
        <Button className="navItem btn-danger rounded">
          {step3 ? (
            <LinkContainer className="navLink" to="/payment">
              <Nav.Link>Payment</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Button>
      </Nav.Item>

      <Nav.Item className=" navItem ">
        <Button className="navItem btn-danger rounded">
          {step4 ? (
            <LinkContainer
              className="navLink btn-danger rounded"
              to="/placeorder"
            >
              <Nav.Link>Place Order</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Button>
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
