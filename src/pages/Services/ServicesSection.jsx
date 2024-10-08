import TaxAdvisoryComponent from "components/TaxAdvisoryComponent";
import { Box, Flex, Container, Heading } from "@chakra-ui/react";
import React, {Suspense} from "react";

const servicesReportsList = [
  {
    headingText: "Tax Advisory",
    descriptionText: "We provide tax advisory services in seeking clarifications.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Tax Health Check",
    descriptionText: "Understanding of tax laws and their respective provisions.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Capacity Development",
    descriptionText: "Lorem LoremLorem oremLorem Lorem",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Second Opinion",
    descriptionText: "Lorem LoremLorem oremLorem Lorem",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* services section */}
      <Box mt="24px">
        <Box bg="white.a700">
          <Flex bg="white.a700" justifyContent="center" p={{ base: "20px", sm: "32px" }}>
            <Flex w={{ md: "92%", base: "100%" }} justifyContent="center" px={{ base: "20px", sm: "32px" }}>
              <Box w="100%">
                <Flex gap="10px" flexDirection="column" alignItems="start" justifyContent="center">
                  <Heading
                    size="headingxs"
                    as="hl"
                    color="light_blue.a700"
                    fontSize="16px"
                    fontWeight={600}
                    textAlign={{ base: "center", md: "start" }}
                    >
                    Get Our Services Today
                  </Heading>
                  <Heading
                    size="heading2xl"
                    color="gray.900"
                    letterSpacing="-0.96px"
                    textAlign={{ base: "center", md: "start" }}
                  >
                    We'd love to help You
                  </Heading>
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <Flex bg="white.a700" justifyContent="center">
            <Container mb="32px" display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
              <Flex gap="12px" w="100%" flexDirection={{ md: "row", base: "column" }}>
                <Suspense fallback={<div>Loading feed...</div>}>
                  {servicesReportsList.map((d, index) => (
                    <TaxAdvisoryComponent {...d} key={"servicesList" + index} />
                  ))}
                </Suspense>
              </Flex>
            </Container>
          </Flex>
        </Box>
      </Box>
    </>
  );
}