import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/demo/contact.css";

// pages for this kit
import LandingPage from "views/LandingPage.js";
import About from "views/About";
import Contact from "views/Contact";
import Service from "views/Service";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/landing-page" replace />} />
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/service" component={<Service/>} />
    </Routes>
  </BrowserRouter>
);
