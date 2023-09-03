import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import emailjs from "emailjs-com";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Contact() {
  const email = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4jhtydj",
        "template_54llnkf",
        "karanpaul543@gmail.com",
        "GCOJ5Z7rad20C-Tv9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to contact us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <link
                href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                rel="stylesheet"
                id="bootstrap-css"
              />
              <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
              <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
              
              <section class="get-in-touch">
                <form class="contact-form row">
                  <div class="form-field col-lg-12">
                    <input
                      id="name"
                      class="input-text js-input"
                      type="text"
                      required
                    />
                    <label class="label" for="name">
                      Name
                    </label>
                  </div>
                  <div class="form-field col-lg-6 ">
                    <input
                      id="email"
                      class="input-text js-input"
                      type="email"
                      required
                    />
                    <label class="label" for="email">
                      E-mail
                    </label>
                  </div>
                  {/* <div class="form-field col-lg-6 ">
                    <input
                      id="company"
                      class="input-text js-input"
                      type="text"
                      required
                    />
                    <label class="label" for="company">
                      Company Name
                    </label>
                  </div> */}
                  <div class="form-field col-lg-6 ">
                    <input
                      id="phone"
                      class="input-text js-input"
                      type="text"
                      required
                    />
                    <label class="label" for="phone">
                      Contact Number
                    </label>
                  </div>
                  <div class="form-field col-lg-12">
                    <input
                      id="message"
                      class="input-text js-input"
                      type="text"
                      required
                    />
                    <label class="label" for="message">
                      Message
                    </label>
                  </div>
                  <div class="form-field col-lg-12">
                    <input class="submit-btn" type="submit" value="Submit" />
                  </div>
                </form>
              </section>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Contact;
