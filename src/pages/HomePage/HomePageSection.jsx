import TaxAdvisoryComponent from "../../components/TaxAdvisoryComponent";
import { Box, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const homepageReportsList = [
  {
    headingText: "Tax Advisory",
    descriptionText: "We provide tax advisory services in seeking clarifications.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Tax Health Check",
    descriptionText: "Understanding of tax laws and their respective provisions.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Capacity Development",
    descriptionText: "Lorem LoremLorem oremLorem Lorem",
    buttonText: "Click here to request",
  },
  {
    headingText: "Second Opinion",
    descriptionText: "Lorem LoremLorem oremLorem Lorem",
    buttonText: "Click here to request",
  },
];

export default function HomePageSection() {
  return (
    <>
      {/* home page section */}
      <Box>
        <Flex bg="white.a700" justifyContent="center">
          <Container mb="32px" display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
            <Flex gap="12px" w="100%" flexDirection={{ md: "row", base: "column" }}>
              <Suspense fallback={<div>Loading feed..</div>}>
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