// import React from "react";

// // reactstrap components
// import { Container } from "reactstrap";

// // core components

// function AboutPage() {
//   let pageHeader = React.createRef();

//   React.useEffect(() => {
//     if (window.innerWidth > 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageXOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });
//   return (
//     <>
//       <div className="page-header page-header">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("../../assets/img/MainBG.jpg") + ")"
//           }}
//           ref={pageHeader}
//         ></div>
//         <div className="content-center">
//           <Container>
//             <h1 className="title">Become Health.</h1>
//             <pre style={{fontSize: 20, color:"white"}}>Buiding The Future in the present</pre>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AboutPage;import React from 'react';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators dark>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={require("../../assets/img/bg11.jpg")}
        alt='...'
      >
        <h1 style={{color:"white", fontSize:"60px"}}>IMET</h1>
        <p style={{color:"white"}}>The IMET stresses a 360 solution which embraces assessment and treatment through the collaborative rubric of “Integration.” With an assembled team of medical experts ranging from Psychiatrists, Physicians, Psychologists, Psychiatric Nurses, Naturopaths and Fitness Experts, the IMET begins with a comprehensive multi-disciplinary assessment and treatment consultation that lays the foundation for a thoroughgoing 90-day integrative medical solution.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={require("../../assets/img/bg7.jpg")}
        alt='...'
      >
        <h1 style={{color:"white", fontSize:"60px"}}>Early Detect</h1>
        <p style={{color:"white"}}>Mental illness is the leading cause of disability in the workplace. EarlyDetect was developed to provide clinicians with precise patient information to help achieve a more accurate diagnosis of mental health disorders.

          Our service targets the health care system, assisting general practitioners in facilitating diagnosis and easing referral time, tracking documentation, and enhancing diagnostic accuracy. We also target the private sector, where companies of all sizes and configurations can utilize mental health screening to facilitate employee wellness and risk management. Our customers will benefit from significantly reduced costs of absenteeism and presenteeism, an enhanced corporate culture of safety and wellness, and a positive reputation among customers and competitors for valuing and proactively addressing employee mental health.</p>
      </MDBCarouselItem>
ß
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={require("../../assets/img/Carousel3.jpeg")}
        alt='...'
      >
        <h1 style={{color:"white", fontSize:"60px"}}>Third slide label</h1>
        <p style={{color:"white"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}