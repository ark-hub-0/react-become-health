import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function About() {
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section section-team text-center" id="aboutteam">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/team/Dr.Pratap.png")}
                    ></img>
                    <h4 className="title">Dr. Pratap Chokka</h4>
                    <p className="category text-info">CEO, Psychiatrist</p>
                    <p className="description">
                      Ten years ago, Dr. Chokka formed the Chokka Centre For
                      Integrative Health with a central purpose to help his
                      patients achieve better functioning and quality of life.
                      He has had the privilege of bringing together like minded
                      clinicians with unique experiences, expertise and insight,
                      under the umbrella of an integrated, multi-faceted
                      approach for the treatment of the whole person. Dr. Chokka
                      continues to approach his patients by challenging them to
                      learn, grow, adapt and face struggles head on, in order to
                      what he hopes will help his patients live a life of
                      purpose, satisfaction and meaning. Dr. Chokka considers it
                      the ultimate privilege to do what he does by helping his
                      patients BECOME.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/team/Dr.yang.png")}
                    ></img>
                    <h4 className="title">Dr. Yang Liu</h4>
                    <p className="category text-info">Chief Scientist</p>
                    <p className="description">
                      Dr. Yang Liu is a postdoctoral researcher at the
                      department of psychiatry, University of Alberta and the
                      chief scientist at Become Health. Dr. Liu has over 25 peer
                      reviewed publications and with expanding expertise in
                      computational psychiatry and personalized medicine, and
                      leveraging cross-linked administrative health records,
                      electronic medical records, multimodal patient data, and
                      machine-learning to improve patient experience and
                      clinical outcome. At Become Health, Dr. Liu developed the
                      first prototype of the EarlyDetect software and continues
                      to work on evidence based appraches to address mental
                      health challanges.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/team/Kristen.png")}
                    ></img>
                    <h4 className="title">Kirsten Yakimowich</h4>
                    <p className="category text-info">Manager</p>
                    <p className="description">
                      With over 17 years of experience in healthcare, Kirsten
                      plays a critical role in the development of the
                      collaborative treatment approaches at the Chokka Center
                      and Become Health. She works with the team to make
                      positive impacts on the mental health treatment of the
                      centre's patients.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/team/Dave.png")}
                    ></img>
                    <h4 className="title">David Grauwiler</h4>
                    <p className="category text-info">
                      Director, Business Development and Stakeholder Relations
                    </p>
                    <p className="description">
                      David Grauwiler was the Executive Director of the Canadian
                      Mental Health Association (CMHA), Alberta Division, now
                      David is a part of Become Health. David is a prominant
                      leader in the mental health space and has years of
                      experience working with the provincial government and the
                      non-profit sector.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/team/Luke.png")}
                    ></img>
                    <h4 className="title">Luke Butterworth</h4>
                    <p className="category text-info">Business Advisor</p>
                    <p className="description">
                      Luke is a serial entrepreneur that thrives on innovating
                      in markets that excite him, including automated supply
                      chains, autonomous vehicles, health and food tech. As an
                      EMBA graduate from the U of A, and Next36/AI alumni there
                      is nothing Luke enjoys more than entrepreneurship.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
export default About;
