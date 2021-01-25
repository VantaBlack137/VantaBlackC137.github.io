import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import discord from "./discord.png";

export class Footer extends React.Component {
  render() {
    return (
      <MDBFooter
        id="footer-bg"
        color="unique-color-dark"
        className="page-footer font-small pt-0"
      >
        <div style={{ backgroundColor: "#6351ce" }}>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text" id="social-media">
                  Alătură-te server-ului nostru de discord :{" "}
                  <img id="discord-logo" src={discord} alt="discord" />
                </h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong id="footer-title">D-Learning</strong>
              </h6>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Link-uri folositoare</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Color picker</a>
              </p>
              <p>
                <a href="#!">Unit converter</a>
              </p>
              <p>
                <a href="#!">Report</a>
              </p>
              <p>
                <a href="#!">Feedback</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-envelope mr-3" id="to-right" />{" "}
                d-learning_team@proton.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" id="to-right" />{" "}
                <a href="#!" style={{ textDecoration: "none", color: "wheat" }}>
                  {" "}
                  Instagram
                </a>
              </p>
              <p>
                <i className="fa fa-print mr-3" id="to-right" />{" "}
                <a href="#!" style={{ textDecoration: "none", color: "wheat" }}>
                  {" "}
                  Discord
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <h4
              href=""
              id="cr-link"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {" "}
              D-Learning.com{" "}
            </h4>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
