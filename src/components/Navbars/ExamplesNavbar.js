import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";

// reactstrap components
import {
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("navbar-dark");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const [showChildDropdown, setShowChildDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowChildDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowChildDropdown(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
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
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <Dropdown
                nav
                inNavbar
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      const container =
                        document.getElementById(`container-imet`);
                      if (container) {
                        container.click();
                        container.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    IMET
                  </DropdownItem>
                  <DropdownItem
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      const container =
                        document.getElementById(`container-tms`);
                      if (container) {
                        container.click();
                        container.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    TMS
                    <Dropdown className="sub-dropdown">
                      {showChildDropdown && (
                        <DropdownMenu>
                          <DropdownItem>OCD</DropdownItem>
                          <DropdownItem>Depression</DropdownItem>
                          <DropdownItem>Nicotine Cessation</DropdownItem>
                        </DropdownMenu>
                      )}
                    </Dropdown>
                  </DropdownItem>

                  <DropdownItem
                    onClick={() => {
                      const container = document.getElementById(
                        `container-earlydetect`
                      );
                      if (container) {
                        container.click();
                        container.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    EarlyDetect
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      const container =
                        document.getElementById(`container-Ketamine`);
                      if (container) {
                        container.click();
                        container.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Ketamine
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

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
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
