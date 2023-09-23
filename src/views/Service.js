import React, { useState } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

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

function Service() {

    const [activeButton, setActiveButton] = useState(false);

    const handleButtonClick = (button) => {
        if (activeButton === button) {
            setActiveButton(false);
        } else {
            setActiveButton(button);
        }
    };

    return (
        <>
            <ExamplesNavbar />
            <div style={{ paddingTop: "5%", backgroundImage: "url(" + require("../assets/img/Third.jpeg") + ")" }}>
                <div style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5em", marginBottom: "20px" }}>
                    <p>Services</p>
                </div>
                <div className="btn-group" style={{ width: "100%" }}>
                    <button onClick={() => handleButtonClick(1)} style={{ width: "25%" }}>IMET</button>
                    <button onClick={() => handleButtonClick(2)} style={{ width: "25%" }}>TMS</button>
                    <button onClick={() => handleButtonClick(3)} style={{ width: "25%" }}>Ketamine</button>
                    <button onClick={() => handleButtonClick(4)} style={{ width: "25%" }}>EarlyDetect</button>
                </div>

                <div className="section section-contact-us text-center">
                    {activeButton === 1 &&
                        <Container>
                            <div style={{ float: "left", display: "block", width: "50%", height: "100%" }}>
                                <h2>IMET</h2>
                                <p>The IMET stresses a 360 solution which embraces assessment and treatment through the collaborative rubric of “Integration.” With an assembled team of medical experts ranging from Psychiatrists, Physicians, Psychologists, Psychiatric Nurses, Naturopaths and Fitness Experts, the IMET begins with a comprehensive multi-disciplinary assessment and treatment consultation that lays the foundation for a thoroughgoing 90-day integrative medical solution.</p>
                            </div>
                            <div style={{ float: "left", display: "block", width: "50%", height: "100%", paddingBottom: "50px", padding: "10px" }}>
                                <img alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("../assets/img/IMET.jpeg")}></img>
                            </div>
                        </Container>
                    }
                    {activeButton === 2 &&
                        <Container>
                            <h2 className="title">TMS Therapy</h2>
                            <p className="description">TMS Therapy is a safe and non-invasive treatment approach for mental health concerns such as depression and OCD. Treatment sessions last for just 20 minutes. It does not require hospitalization or anesthesia. Patients sit in a comfortable chair wearing a helmet containing a patented H-coil that stimulate the brain. Our medical professionals are trained to offer this in-house treatment with minimal discomfort.</p>
                        </Container>
                    }
                    {activeButton === 3 &&
                        <Container>
                            <h2 className="title">Ketamine</h2>
                            <p className="description">Samsung S23 Ultra</p>
                        </Container>
                    }
                    {activeButton === 4 &&
                        <Container>
                            <h2 className="title">Early Detect</h2>
                            <p className="description">Mental illness is the leading cause of disability in the workplace. EarlyDetect was developed to provide clinicians with precise patient information to help achieve a more accurate diagnosis of mental health disorders. Our service targets the health care system, assisting general practitioners in facilitating diagnosis and easing referral time, tracking documentation, and enhancing diagnostic accuracy. We also target the private sector, where companies of all sizes and configurations can utilize mental health screening to facilitate employee wellness and risk management. Our customers will benefit from significantly reduced costs of absenteeism and presenteeism, an enhanced corporate culture of safety and wellness, and a positive reputation among customers and competitors for valuing and proactively addressing employee mental health.</p>
                        </Container>
                    }
                </div>
            </div>
        </>

    );


}

export default Service;