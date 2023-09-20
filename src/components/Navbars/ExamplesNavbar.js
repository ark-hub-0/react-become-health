import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 399 ||
  //       document.body.scrollTop > 399
  //     ) {
  //       setNavbarColor("navbar-dark");
  //     } else if (
  //       document.documentElement.scrollTop < 400 ||
  //       document.body.scrollTop < 400
  //     ) {
  //       setNavbarColor("navbar-transparent");
  //     }
  //   };
  //   window.addEventListener("scroll", updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
  // const [showChildDropdown, setShowChildDropdown] = useState(false);

  // function handleMouseEnter() {
  //   setShowChildDropdown(true);
  // }

  // function handleMouseLeave() {
  //   setShowChildDropdown(false);
  // }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <div className="navbar-translate">
            <Link
              to="navbarheader"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <NavbarBrand id="navbar-brand">
                <img
                  src={require("../../assets/img/white.png")}
                  alt="Become Health"
                  style={{ height: "66px", margin: "auto" }}
                />
              </NavbarBrand>
            </Link>
          </div>
          {/* <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          > */}
          <Nav variant="dark" bg="dark" expand="lg">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Services"
              menuVariant="dark"
            >
              <NavDropdown.Item>IMET</NavDropdown.Item>

                <NavDropdown.Item>
                TMS
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  menuVariant="dark"
                >
                  <NavDropdown.Item>Depression</NavDropdown.Item>
                  <NavDropdown.Item>OCD</NavDropdown.Item>
                  <NavDropdown.Item>Nicotine Cessation</NavDropdown.Item>
                </NavDropdown>

              </NavDropdown.Item>
              <NavDropdown.Item>EarlyDetect</NavDropdown.Item>
              <NavDropdown.Item>Ketamine</NavDropdown.Item>
            </NavDropdown>

            <NavItem>
              <Link
                to="news"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                <NavLink>News</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="contactus"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                <NavLink>Contact Us</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="" id="twitter-tooltip">
                <i className="fab fa-twitter"></i>
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
              <UncontrolledTooltip target="#twitter-tooltip">
                Follow us on Twitter
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink href="" id="facebook-tooltip">
                <i className="fab fa-facebook-square"></i>
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
              <UncontrolledTooltip target="#facebook-tooltip">
                Like us on Facebook
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink href="" id="instagram-tooltip">
                <i className="fab fa-instagram"></i>
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
              <UncontrolledTooltip target="#instagram-tooltip">
                Follow us on Instagram
              </UncontrolledTooltip>
            </NavItem>
          </Nav>
          {/* </Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
