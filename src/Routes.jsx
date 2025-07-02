import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import AboutUs from "pages/AboutUs";
import Services from "pages/Services";
import Publication from "pages/Publication";
import LinkedTaxLaws from "pages/LinkedTaxLaws";
import LinkedTax from "pages/LinkedTax";
import TaxLaws from "pages/TaxLaws";
import IncomeTaxActPage from "pages/IncomeTaxAct";
import ServicesOne from "pages/ServicesOne";
import Login from "admin/pages/Login";
import Dashboard from "admin/pages/Dashboard";
import Profile from "admin/pages/Profile";
import ProtectedRoute from "components/ProtectedRoute";
import PdfViewer from "pages/PdfViewer";
import Collaboration from "pages/Collaboration";
import CaseDetails from "pages/LinkedTax/caseDetailsPage";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/tax-laws" element={<TaxLaws />} />
      <Route path="/linked-tax-laws" element={<LinkedTaxLaws />} />
      <Route path="/linked-tax" element={<LinkedTax />} />
      <Route path="/income-tax-act" element={<IncomeTaxActPage />} />
      <Route path="/servicesone" element={<ServicesOne />} />
      <Route path="/pdf-viewer" element={<PdfViewer />} />
      <Route path="/Collaboration" element={<Collaboration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/case-details" element={<CaseDetails />} />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectRoutes;
