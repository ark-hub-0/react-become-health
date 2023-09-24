import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

import {
    Container,
} from "reactstrap";

function Service() {

    useEffect(() => {
        // Method to be called on page load
        setActiveButton(1);
    }, []);

    const [activeButton, setActiveButton] = useState(false);

    const handleButtonClick = (button) => {

        if (activeButton === button) {
            //DOnt call anything
        } else {
            setActiveButton(button);
        }
    };

    return (
        <>
            <ExamplesNavbar />
            <div style={{ paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "white" }}>
                <div style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5em", marginBottom: "20px" }}>
                    <p>Services</p>
                </div>
                <div className="btn-group" style={{ width: "100%" }}>
                    <button onClick={() => handleButtonClick(1)} style={{ width: "25%" }}>IMET</button>
                    <button onClick={() => handleButtonClick(2)} style={{ width: "25%" }}>TMS</button>
                    <button onClick={() => handleButtonClick(3)} style={{ width: "25%" }}>Ketamine</button>
                    <button onClick={() => handleButtonClick(4)} style={{ width: "25%" }}>EarlyDetect</button>
                </div>

                <div className="section section-services text-center">
                    {activeButton === 1 &&
                        <Route path="/imet">
                            <Container id="IMET">
                                <h2 className="title">IMET</h2>
                                <h5 className="sub-title">Integrated Medical Evaluations</h5>
                                <br />
                                <img style={{ float: "right", paddingLeft: "30px" }} src={require("../assets/img/IMETLogo.png")} alt="IMETLogo"></img>
                                <p className="description">The IMET stresses a 360 solution which embraces assessment and treatment through the collaborative rubric of “Integration.” With an assembled team of medical experts ranging from Psychiatrists, Physicians, Psychologists, Psychiatric Nurses, Naturopaths and Fitness Experts, the IMET begins with a comprehensive multi-disciplinary assessment and treatment consultation that lays the foundation for a thoroughgoing 90-day integrative medical solution.</p>
                            </Container>
                        </Route>
                    }
                    {activeButton === 2 &&
                        <Route path="/tms">
                            <Container id="TMS">
                                <h2 className="title">TMS Therapy</h2>
                                <h5 className="sub-title">A revolutionary treatment for depression and OCD</h5>
                                <br />
                                <p className="description">TMS Therapy is a safe and non-invasive treatment approach for mental health concerns such as depression and OCD. Treatment sessions last for just 20 minutes. It does not require hospitalization or anesthesia. Patients sit in a comfortable chair wearing a helmet containing a patented H-coil that stimulate the brain. Our medical professionals are trained to offer this in-house treatment with minimal discomfort.</p>
                            </Container>
                        </Route>
                    }
                    {activeButton === 3 &&
                        <Container id="Ketamine">
                            <h2 className="title">Ketamine</h2>
                            <h5 className="sub-title">Treatment for depression, a pain management tool</h5>
                            <br />
                            <p className="description">Ketamine is a medication that doctors use as an anesthetic to induce loss of consciousness. Under the Controlled Substances Act, health experts consider ketamine a schedule III non-narcotic substance. Some people use ketamine for its hallucinogenic properties. Ketamin can sedate, incapacitate, and cause short-term memory loss, and because of this, some people use it as a date-rape drug.</p>
                        </Container>
                    }
                    {activeButton === 4 &&
                        <Container id="Early Detect">
                            <h2 className="title">Early Detect</h2>
                            <h5 className="sub-title">Achieve a more accurate diagnosis of mental health disorders</h5>
                            <br />
                            <p className="description">Mental illness is the leading cause of disability in the workplace. EarlyDetect was developed to provide clinicians with precise patient information to help achieve a more accurate diagnosis of mental health disorders. Our service targets the health care system, assisting general practitioners in facilitating diagnosis and easing referral time, tracking documentation, and enhancing diagnostic accuracy. We also target the private sector, where companies of all sizes and configurations can utilize mental health screening to facilitate employee wellness and risk management. Our customers will benefit from significantly reduced costs of absenteeism and presenteeism, an enhanced corporate culture of safety and wellness, and a positive reputation among customers and competitors for valuing and proactively addressing employee mental health.</p>
                        </Container>
                    }
                </div>
            </div>
        </>

    );


}

export default Service;