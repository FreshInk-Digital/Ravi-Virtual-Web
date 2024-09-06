import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import AboutUs from "pages/AboutUs";
import Services from "pages/Services";
import Publication from "pages/Publication";
import ServicesOne from "pages/ServicesOne";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/servicesone" element={<ServicesOne />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectRoutes;
