import TaxAdvisoryComponent from "../../components/TaxAdvisoryComponent";
import { Box, Flex, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";

const homepageReportsList = [
  {
    headingText: "Tax Advisory",
    descriptionText: "We provide tax advisory services in seeking clarifications and apply rulings.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Tax Health Check",
    descriptionText: "We conduct tax health checks before tax audits or investigations.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Capacity Development",
    descriptionText: "We conduct capacity development programs in taxation.",
    buttonText: "Click here to request",
  },
  {
    headingText: "Second Opinion",
    descriptionText: "We provide second on taxation matters including transaction advisory services.",
    buttonText: "Click here to request",
  },
];

export default function HomePageSection() {
  return (
    <>
      {/* Home page section */}
      <Box>
        <Flex bg="white.a700" textAlign="center" justifyContent="center">
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
