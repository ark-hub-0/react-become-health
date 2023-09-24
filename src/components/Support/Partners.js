import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function Partners() {
    return (
        <>
            <ExamplesNavbar />
            <div style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5em", marginBottom: "20px" }}>
                <p>Affiliated Partners</p>
            </div>
            <div class="flex-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "30px" }}>
                <section class="partner-logo" style={{ width: "15%", paddingLeft: "70px" }}>
                    <img src={require("../../assets/img/telus_partner.png")} alt="telus" />
                </section>
                <section class="partner-logo" style={{ width: "15%", paddingLeft: "70px" }}>
                    <img src={require("../../assets/img/re_hub.png")} alt="re_hub" />
                </section>
                <section class="partner-logo" style={{ width: "15%", paddingLeft: "70px" }}>
                    <img src={require("../../assets/img/uni.png")} alt="uni" />
                </section>
            </div>


        </>
    );
}

export default Partners;