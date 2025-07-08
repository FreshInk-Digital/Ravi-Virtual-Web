import TaxAdvisoryComponent from "components/TaxAdvisoryComponent";
import { Box, Flex, Container, Heading, Text } from "@chakra-ui/react";
import React, {Suspense} from "react";

const servicesReportsList = [
  {
    headingText: "Tax Advisory",
    descriptionText: "We provide tax advisory services in seeking clarifications and apply rulings.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Tax Health Check",
    descriptionText: "We conduct tax health checks before tax audits or investigations.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Capacity Development",
    descriptionText: "We conduct capacity development programs in taxation.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
  {
    headingText: "Second Opinion",
    descriptionText: "We provide second on taxation matters including transaction advisory services.",
    buttonText: "Click here to request",
    linkTo:"/servicesone",
  },
];

export default function CollaborationList() {
  return (
    <>
      {/* services section */}
      <Box mt="24px">
        <Box bg="white.a700">

        <Flex bg="white.a700" justifyContent="center">
  <Container
    mb="5px"
    display="flex"
    justifyContent="center"
    px={{ md: "0px", base: "20px" }}
  >
    <Flex
      gap="0px"
      w="100%"
      flexDirection={{ md: "row", base: "column" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        {/* <Heading
          size="headingxs"
          as="hl"
          color="light_blue.a700"
          fontSize="16px"
          fontWeight={600}
        >
          Ravi moova Collaborators
        </Heading> */}
        <Heading
          size="heading2xl"
          color="gray.900"
          letterSpacing="-0.96px"
          // fontWeight={200}
        >
          Our Available Collaborators
          {/* COLLABORATORS <Text as="span" color="light_blue.a700" size="heading2xl">list</Text> */}
        </Heading>
      </Flex>
      <Heading
          size="headingxs"
          as="hl"
          color="light_blue.a700"
          fontSize="15px"
          fontWeight={600}
          pr="20px"
        >
          You can register now
        </Heading>
    </Flex>
  </Container>
</Flex>


          <Flex bg="white.a700" textAlign="start" justifyContent="center">
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