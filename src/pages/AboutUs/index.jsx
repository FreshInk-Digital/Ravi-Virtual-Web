import { Helmet } from "react-helmet";
import Footer from "components/Footer";
import Header from "components/Header";
import { Box, Image, Flex, Heading, Container } from "@chakra-ui/react";
import React from "react";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Ravi Ariv - Over 10 years of Excellence in Tax Advisory services</title>
        <meta 
          name="description"
          content="Learn more about Ravi Ariv's commitment to Tax Advisory services and our journey of over two decades in this industry area. Explore our mission and vision for the future."
        />
      </Helmet>
      <Flex bg="white.a700" w="100%" flexDirection="column" alignItems="center">
        <Header alignSelf="stretch" />
        <Container mt="80px" px={{ md: "0px", base: "20px" }}>
          <Box>
            <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
              <Image
                src="images/img_portrait_profes.png"
                alt="Profile Image"
                h="530px"
                w={{ md: "530px", base: "100%" }}
                fit="cover"
                borderRadius="16px"
              />
              <Flex gap="20px" flex={1} flexDirection="column" alignSelf={{ md: "auto", base: "stretch" }}>
                <Flex gap="12px" flexDirection="column" alignItems="end">
                  <Flex alignSelf="stretch" px={{ md: "50px", base: "20px" }}>
                    <Heading size="headingxl" as="hl" color="black.900" fontFamily="Poppins" textTransform="capitalize">
                      About Who We Are
                    </Heading>
                  </Flex>
                  <Heading
                    color="black.900"
                    fontFamily="Poppins"
                    w={{ md: "92%", base: "100%" }}
                    lineHeight="151.52%"
                    textAlign="justify"
                    fontWeight="normal"  // Ensure regular font weight
                  >
                    Ravi Ariv Virtual Institute or RAVI is one of the most reliable 
                    tax advisory service providers which is engaged in the tax advisory
                    services, capacity development, tax health check, tax judgments, second
                    opinion and transaction advisory a service of high-quality services with
                    a history of more than two decades in the taxation industry in Tanzania.
                    In order to get more information about other aspects and products of the 
                    RAVI brand, you can use the following ribbons
                  </Heading>
                </Flex>
                <Flex gap="20px" flexDirection="column" alignItems="end">
                  <Box h="2px" bg="gray.200" w="92%" />
                  <Heading
                    as="h3"
                    color="black.900"
                    fontFamily="Poppins"
                    w={{ md: "92%", base: "100%"}}
                    lineHeight="151.52%"
                    textAlign="justify"
                    fontWeight="normal"  // Ensure regular font weight
                  >
                    The meaning of service provision in RAVI is the creation, development, 
                    and the path to progress, and the starting point to achieve the goals that 
                    we all have in all our service rendering the taxation services, with over 20 years 
                    of experience in the accounting, training and taxation, we officially started 
                    our activities in the field of training and teaching. Then embarked in filed 
                    taxation engagements in terms of tax auditing, tax legislation, capacity development in taxation, 
                    tax legislations.
                  </Heading>
                  {/* <Heading
                    as="h4"
                    color="black.900"
                    fontFamily="Poppins"
                    w={{ md: "92%", base: "100%" }}
                    lineHeight="151.52%"
                    textAlign="justify"
                    fontWeight="normal"  // Ensure regular font weight
                  >
                    The meaning of production in Carlio is the creation, development, and the path to progress, and the
                    starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of
                    experience in the oil and petrochemical industry, we officially started our activities in the field
                    of design, engineering, construction of refinery equipment, and the production of various motor and
                    industrial lubricants in the year 1390 (2011)
                  </Heading> */}
                </Flex>
              </Flex>
            </Flex>
            <Flex
              mt="56px"
              ml={{ md: "10px", base: "0px" }}
              alignItems="center"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex
                gap="22px"
                flex={1}
                flexDirection="column"
                alignItems="start"
                alignSelf={{ md: "auto", base: "stretch"}}
              >
                <Heading size="headingxl" as="h5" color="black.900" fontFamily="Poppins" textTransform="capitalize">
                  Mission & Vision
                </Heading>
                <Flex mb="102px" gap="20px" alignSelf="stretch" flexDirection="column" alignItems="start">
                  <Heading
                    as="h6"
                    color="black.900"
                    fontFamily="Poppins"
                    w={{ md: "80%", base: "100%" }}
                    lineHeight="151.52%"
                    textAlign="justify"
                    fontWeight="normal"  // Ensure regular font weight
                  >
                    Our mission is to make sure that taxes and taxation are fairly and accurately legislated, imposed and administered by all stakeholders.
                  </Heading>
                  <Heading
                    as="h6"
                    color="black.900"
                    fontFamily="Poppins"
                    w={{ md: "80%", base: "100%" }}
                    lineHeight="151.52%"
                    textAlign="justify"
                    fontWeight="normal"  // Ensure regular font weight
                  >
                    To promote fair and accurate legislation, imposition and administration of taxation by all stakeholders.
                  </Heading>
                </Flex>
              </Flex>
              <Image
                src="images/image_work_being_creative_01.jpg"
                alt="Creative Work"
                h="430px"
                w={{ md: "36%", base: "100%" }}
                fit="contain"
              />
            </Flex>
            <Box mt="28px">
              <Box
                h={{ md: "390px", base: "auto" }}
                bg="black.900"
                bgImage="url(/images/img_frame_560_390x1172.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
                p={{ md: "56px", base: "20px" }}
              >
                {/* Additional content here */}
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer mt="14px" alignSelf="stretch" />
      </Flex>
    </>
  );
}
