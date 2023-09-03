/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href=""
              target="_blank"
            >
              GitHub
            </a>
            . Coded by{" "}
            <a
              href=""
              target="_blank"
            >
              Ass
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
