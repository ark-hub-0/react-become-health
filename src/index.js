import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/demo/contact.css";
import "assets/demo/news.css"

// pages for this kit
import LandingPage from "views/LandingPage.js";
import About from "views/About";
import Contact from "views/Contact";
import Service from "views/Service";
import News from "views/News";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/react-become-health" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
      <Route path="/react-become-health/about" element = {<About/>}/>
      <Route path="/react-become-health/contact" element = {<Contact/>}/>
      <Route path="/react-become-health/service" element={<Service/>} />
      <Route path="/react-become-health/news" element={<News/>} />
    </Routes>
  </HashRouter>
);

// Hello World
