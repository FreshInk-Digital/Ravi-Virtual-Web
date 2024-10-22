import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box } from "@chakra-ui/react";
import IncomeTaxActContent from "./IncomeTaxActContent"; // New Component

export default function IncomeTaxActPage() {
  return (
    <>
      <Helmet>
        <title>Income Tax Act 2024 - Legal Framework</title>
        <meta
          name="description"
          content="Access the full text of the Income Tax Act updated for 2024. Explore sections covering taxation rules, exemptions, deductions, and more."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        {/* Header Section */}
        <Header alignSelf="stretch" />
        
        {/* Main Act Content */}
        <IncomeTaxActContent />

        {/* Footer */}
        <Footer mt="0px" />
      </Box>
    </>
  );
}
