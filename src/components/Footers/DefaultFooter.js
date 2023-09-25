/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

// function DefaultFooter() {
//   return (
//     <>
//       <footer className="footer footer-default">
//         <Container>

//           <div className="copyright" id="copyright">
//             © {new Date().getFullYear()}, Designed by{" "}
//             <a
//               href=""
//               target="_blank"
//             >
//               GitHub
//             </a>
//             . Coded by{" "}
//             <a
//               href=""
//               target="_blank"
//             >
//               Ass
//             </a>
//             .
//           </div>
//         </Container>
//       </footer>
//     </>
//   );
// }

// export default DefaultFooter;

function DefaultFooter() {
  return (
    <>

      <footer
        class="text-center text-lg-start text-white"
        style={{backgroundColor: "#14a2b8"}}>
        <Container>
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  
                  <img
                  src={require("../../assets/img/Logo_backup.png")} alt="Become Health"
                  style={{ height: "66px", margin: "auto" , width:"100", alignItems:"center"}}
                  />
                 <p>A Company</p>
                </div>
                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a class="text-white">IMET</a>
                  </p>
                  <p>
                    <a class="text-white">EarlyDetect</a>
                  </p>
                  
                </div>
                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a class="text-white">Your Account</a>
                  </p>
                  <p>
                    <a class="text-white">Become an Affiliate</a>
                  </p>
                  
                  
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p class="foot_p"><i class="fas fa-home mr-3"></i>300 2603 Hewes Way
                  <br/><i class="fas fa-phone mr-3"></i>(780) 465-5749
                  <br/><a href="mailto:info@becomehealth.com" class="text-reset">info@becomehealth.com</a></p>
                </div>
              </div>
            </section>
            <hr class="my-3" />

            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                  <div class="p-3">
                    © 2023 Copyright : 
                    <a class="text-white" href="#"
                    > ARK Technologies</a
                    >
                  </div>
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-facebook-f"></i
                  ></a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"

                    role="button"
                  ><i class="fab fa-twitter"></i
                  ></a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-google"></i
                  ></a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    role="button"
                  ><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </footer>

    </>
  );
}

export default DefaultFooter;