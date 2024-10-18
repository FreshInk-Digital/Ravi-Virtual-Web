import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box } from "@chakra-ui/react";


export default function TaxLaws() {
  return (
    <>
      <Helmet>
        <title>Tax Laws - Legal Frameworks</title>
        <meta
          name="description"
          content="Access the full text of the Tax Laws. Explore sections covering income tax act, exemptions, deductions, and more."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        {/* Header Section */}
        <Header alignSelf="stretch" />
        
        {/* Main Act Content */}

        {/* Footer */}
        <Footer mt="0px" />
      </Box>
    </>
  );
}
