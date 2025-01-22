import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LinkedTaxLaws from "./LinkedTaxLaws";
import CaseDetails from "./caseDetailsPage";

export default function LinkedTaxLaw() {
  return (
    <>
      <Helmet>
        <title>Linked Tax Laws - Legal Frameworks</title>
        <meta
          name="description"
          content="Access the full text of the Tax Laws. Explore sections covering income tax act, exemptions, deductions, and more."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        {/* Header Section */}
        <Header alignSelf="stretch" />
        <Routes>
        <Route path="/" element={<LinkedTaxLaws />} />
        <Route path="/case-details/id" element={<CaseDetails />} />
        </Routes>
        {/* Linked Tax Laws */}
        {/* <LinkedTaxLaws /> */}

        {/* Footer */}
        <Footer mt="0px" />
      </Box>
    </>
  );
}
