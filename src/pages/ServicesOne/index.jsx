import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactSection from "./ContactSection";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function ServicesOnePage() {
  return (
    <>
      <Helmet>
        <title>Contact Ravi Ariv Support - Get Help 24/7</title>
        <meta
          name="description"
          content="Need assistance? Contact our support team 24/7 via phone or email. Get your queries resolved quickly with our dedicated customer service."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Header />

        {/* contact section */}
        <ContactSection />

        {/* about us section */}
        <Footer mt="0px" />
      </Box>
    </>
  );
}
