import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

function Partners() {
    return (
        <>
            <ExamplesNavbar />
            <div style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5em" }}>
                <p>Affiliated Partners</p>
            </div>
            <div className="affiliated-partners">
                <ul>
                    <li >
                        <a><img src={require("../../assets/img/telus_partner.png")} alt="telus" /></a>
                    </li>
                    <li>
                        <a><img src={require("../../assets/img/re_hub.png")} alt="re_hub" /></a>
                    </li>
                    <li >
                        <a><img src={require("../../assets/img/uni.png")} alt="uni" /></a>
                    </li>
                </ul>
            </div>


        </>
    );
}

export default Partners;