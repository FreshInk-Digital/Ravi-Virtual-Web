import TaxAdvisoryComponent from "../../components/TaxAdvisoryComponent";
import { Box, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const homepageReportsList = [
  {
    headingText: "Provision of Tax Judgments",
    descriptionText: "We keep database of all Tanzanian tax judgments and provide selected cases to our clients on request.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Handling of Refund and Exemption Applications",
    descriptionText: "We provide assistance to refund applications and follow-up including provision of necessary explanations and support.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Handling of Objections and Appeals",
    descriptionText: "We handle objections and appeal at various levels including provision of required information and explanations.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Ask Teacher Zacchaeus (Q&A)",
    descriptionText: "We facilitate Questions and Answers via this page and publish them in newspapers and our pages of social media.",
    buttonText: "Click here to request",
  },
];

export default function HomePageSection2() {
  return (
    <>
      {/* Home page section */}
      <Box>
        <Flex bg="white.a700" textAlign="start" justifyContent="center">
          <Container mb="32px" display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
            <Flex gap="12px" w="100%" flexDirection={{ md: "row", base: "column" }} alignItems="center"> {/* Centering for mobile */}
              <Suspense fallback={<div>Loading feed...</div>}>
                {homepageReportsList.map((d, index) => (
                  <TaxAdvisoryComponent {...d} key={"homepageList" + index} />
                ))}
              </Suspense>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
}
