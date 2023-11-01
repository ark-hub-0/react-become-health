import React, { useState } from 'react';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "reactstrap";

import {
    Navbar,
    NavbarBrand
} from "reactstrap";

function News() {

    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    React.useEffect(() => {
        const updateNavbarColor = () => {
            setNavbarColor("navbar-dark");
            if (
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

    const [shown, setShown] = React.useState(false)


    return (
        <>
            {/* <ExamplesNavbar /> */}
            <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" style={{ position: "absolute" }}>
                <Container>
                    <div className="navbar-translate">
                        <Link
                            to="navbarheader"
                            smooth={true}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            <NavbarBrand id="navbar-brand">
                                <img id="navbar-logo"
                                    src={require("../assets/img/Logo_backup.png")}
                                    alt="Become Health"
                                    style={{ height: "66px", margin: "auto" }}
                                />
                            </NavbarBrand>
                        </Link>
                    </div>
                </Container>
            </Navbar>
            <div className="media">
                <h2 class="title">NEWS</h2>
            </div>

            <div className="news-with-desc">
                <div class="row">
                    <div class="col-md-4 how-img">
                        <img onClick={() => setShown(!shown)} src={require("../assets/img/Media.jpg")} style={{ cursor: "pointer" }} className="img-thumbnail img-fluid" alt="" />
                    </div>
                    <div class="col-md-8">
                        <h4>Let's Meet for a Beer: Episode 45</h4>
                        <h4 class="subheading">Mental Health in the Hospitality Industry</h4>
                        <p class="text-muted">On today's episode of the Let's Talk About Mental Health Podcast, Cam Dobranski joins me as co-host for part one in our series about mental health in the workplace. Today we are joined by Dr. Pratap Chokka, Founder of The Chokka Center For Integrative Health. On the podcast, Dr. Chokka talks to us about what we can do to identify signs that someone may need help and how they can access that help</p>
                        {shown ? <VideoModal src="https://embed.podcasts.apple.com/ca/podcast/episode-45-mental-health-in-the-hospitality-industry/id1546165556?i=1000535294807" /> : null}

                        {/* {shown ? <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" style={{ width: "100%", overflow: "hidden", background: "transparent" }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/ca/podcast/episode-45-mental-health-in-the-hospitality-industry/id1546165556?i=1000535294807"></iframe> :null } */}
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <h4>Find rewarding projects</h4>
                        <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
                        <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                            Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                            More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
                    </div>
                    <div class="col-md-4 how-img">
                        <img style={{ cursor: "pointer" }} src={require("../assets/img/bg1.jpg")} class="img-thumbnail img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div className="news">
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../assets/img/bg8.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../assets/img/bg7.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../assets/img/bg3.jpg")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default News;

const VideoModal = (props) => {
    return <iframe
        className="popup-content"
        title={props.src}
        allowFullScreen
        frameBorder="0"
        width="100%"
        height="175"
        src={props.src}
    />
}