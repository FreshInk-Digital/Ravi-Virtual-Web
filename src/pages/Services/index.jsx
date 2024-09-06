import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - Professional Tax Advisory and Development</title>
        <meta
          name="description"
          content="Discover our range of services including Tax Advisory, Capacity Development, and Tax Judgements at Ravi Ariv Virtual Institute. Request our expert services today and ensure your tax compliance."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Header />

        {/* services section */}
        <ServicesSection />

        {/* about us section */}
        <AboutUsSection />
        <Footer mt="96px" />
      </Box>
    </>
  );
}