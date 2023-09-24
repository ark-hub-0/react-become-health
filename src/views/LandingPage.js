import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Partners from "../components/Support/Partners";
import Carousel from "../components/Support/Carousel";
function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <section id="navbarheader">
      <ExamplesNavbar />
      </section>
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description" style={{ color: "black" }}>
                  We are a health technology company that specializes in
                  evidence-based prevention, assessment and management of mental
                  health disorders. Our main goal is to help people and
                  organizations to achieve their full potential.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <section id="carousel">
          <Carousel />
        </section>
        <section id="IMET">
          <Service/>
        </section>
        {/* <section id="news">
          <Service />
        </section> */}
        <section id="aboutus">
          <About />
        </section>
        <section id="contactus">
          <Contact />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
