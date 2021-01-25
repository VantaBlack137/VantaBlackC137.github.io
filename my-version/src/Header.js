import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import discord from "./discord.png";
import { Link } from "react-router-dom";

function dezvoltare() {
  alert("Indisponibil");
}
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          id="header-bg"
        >
          <Navbar.Brand id="title">
            <Link
              to="/"
              id="title"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              D-Learning
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Materii" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  {" "}
                  <Link
                    to="/materii"
                    id="cls"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    {" "}
                    Clasa A IX-A{" "}
                  </Link>{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={dezvoltare}> Dezvoltare Personală </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <h3 id="dis-text">
                  Alătură-te serverului nostru de discord :{" "}
                  <img src={discord} alt="discord" id="discord-logo" />
                </h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
