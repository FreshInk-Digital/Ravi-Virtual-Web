import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import HomePageSection from "./HomePageSection";
import { Heading, Flex, Box, Button, Image, Container } from "@chakra-ui/react";
import React from "react";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>
          Ravi Ariv Institute Empowering Through Education
        </title>
        <meta
          name="description"
          content="Join the Ravi Ariv Institute and embrace Service Above Self with our free learning resources. Discover tax laws, advisory services, and capacity development for community betterment"
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Flex
          gap={{ md: "70px", base: "35px", sm: "52px" }}
          flexDirection="column"
        >
          <Header />          

          {/* about us section */}
          <AboutUsSection />
          <Flex flexDirection="column" alignItems="center">
            <Container px={{ md: "0px", base: "20px" }}>
              <Flex
                mr={{ md: "10px", base: "0px" }}
                gap="10px"
                alignItems="center"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Image
                  src="images/img_businessman_checking_bankbook.png"
                  alt="Businessman Image"
                  h="388px"
                  w={{ md: "50%", base: "100%" }}
                  fit="contain"
                  borderRadius="4px"
                />
                <Flex
                  mb="16px"
                  gap="24px"
                  flex={1}
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  py={{ md: "64px", base: "20px" }}
                  alignSelf={{ md: "auto", base: "stretch" }}
                >
                  <Flex
                    gap="16px"
                    alignSelf="end"
                    w={{ md: "94%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Button
                      size="sm"
                      colorScheme="white_A700"
                      leftIcon={
                        <Image
                          src="images/img_contrast.svg"
                          alt="Contrast"
                          h="15px"
                          w="15px"
                          my="6px"
                        />
                      }
                      fontWeight={900}
                      gap="0px"
                      borderColor="blue_gray.100"
                      borderWidth="2px"
                      borderStyle="solid"
                      minw="100px"
                      borderRadius="6px"
                    >
                      About us
                    </Button>
                    <Heading
                      size="heading2xl"
                      as="h1"
                      color="gray.900"
                      letterSpacing="-0.96px"
                      w="100%"
                      lineHeight="60px"
                    >
                      Our mission is to make sure the community is a better
                      place
                    </Heading>
                  </Flex>
                  <Heading
                    size="textlg"
                    color="blue_gray.700"
                    ml={{ md: "32px", base: "0px" }}
                    fontWeight={400}
                    w={{ md: "88%", base: "100%" }}
                    lineHeight="30px"
                  >
                    Lorem ipsum dolor sit amet consectetur. Interdum vitae et et
                    nunc. Duis dictum ut a mi sapien in.
                  </Heading>
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="xl"
                      color="white.a700"
                      ml={{ md: "32px", base: "0px" }}
                      fontWeight={600}
                      borderColor="light_blue.600"
                      borderWidth="1px"
                      borderStyle="solid"
                      boxShadow="xs"
                      minw="128px"
                      borderRadius="8px"
                    >
                      Learn more
                    </Button>
                  </a>
                </Flex>
              </Flex>
            </Container>
            <Box
              mt="-40px"
              position="relative"
              bg="white.a700"
              alignSelf="stretch"
            >
              <Flex
                bg="white.a700"
                justifyContent="flex-start"
                p={{ base: "20px", sm: "32px" }}
              >
                <Flex
                  gap="10px"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  px={{ base: "20px", sm: "32px" }}
                >
                  <Heading
                    size="headingxs"
                    as="h3"
                    textAlign="start"
                    color="light_blue.a700"
                    fontSize="16px"
                    fontWeight={600}
                  >
                    Get Our Services Today
                  </Heading>
                  <Heading
                    size="heading2xl"
                    as="h4"
                    color="gray.900"
                    letterSpacing="-0.96px"
                  >
                    What we provide
                  </Heading>
                </Flex>
              </Flex>

              {/* home page section */}
              <HomePageSection />
            </Box>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
