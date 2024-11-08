// HomePage/index.jsx
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import HomePageSection from "./HomePageSection";
import HomePageSection2 from "./HomePageSection2";
import { Heading, Flex, Box, Button, Image, Container } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function HomePagePage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate("/aboutus"); // Navigate to the About Us page
  };

  return (
    <>
      <Helmet>
        <title>Ravi Ariv Institute Empowering Through Education</title>
        <meta
          name="description"
          content="Join the Ravi Ariv Institute and embrace Service Above Self with our free learning resources. Discover tax laws, advisory services, and capacity development for community betterment"
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Flex
          gap={{ md: "70px", base: "35px", sm: "20px" }} // Adjusted gap for smaller screens
          flexDirection="column"
        >
          <Header />

          {/* Conditional rendering of the About Us section */}
          <Flex display={{ base: "none", md: "flex" }} flexDirection="column" alignItems="center">
            <AboutUsSection />
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <Container px={{ md: "0px", base: "20px" }}>
              <Flex
                mr={{ md: "10px", base: "0px" }}
                gap="10px"
                alignItems="center"
                flexDirection={{ md: "row", base: "column" }}
              >
                {/* <Image
                  src="images/img_businessman_checking_bankbook.png"
                  alt="Businessman Image"
                  h={{ md: "388px", base: "250px" }} // Responsive height
                  w={{ md: "50%", base: "100%" }}
                  fit="contain"
                  borderRadius="4px"
                /> */}
                <Box
                  bg="light_blue.a700"
                  w="100%"
                  p="0px"
                  borderRadius="12px"
                  mb="40px"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Flex
                    mb="16px"
                    gap="24px"
                    flex={1}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    py={{ md: "64px", base: "20px" }}
                    alignSelf={{ md: "auto", base: "stretch" }}
                  >
                    <Flex
                      gap="16px"
                      alignSelf="center"
                      w={{ md: "94%", base: "100%" }}
                      flexDirection="column"
                      alignItems="center"
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
                        fontFamily="Poppins"
                        borderWidth="2px"
                        borderStyle="solid"
                        minW="100px"
                        borderRadius="6px"
                      >
                        About us
                      </Button>
                      <Heading
                        size="heading2xl"
                        as="h1"
                        color="white"
                        letterSpacing="-0.96px"
                        w="100%"
                        lineHeight="45px"
                        fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "40px" }} // Responsive font size
                      >
                        We strive to make more good tax citizens.
                      </Heading>
                      <Heading
                        size="textlg"
                        color="white"
                        fontWeight={400}
                        w={{ md: "88%", base: "100%" }}
                        lineHeight="30px"
                        fontSize={{ base: "16px", sm: "17px", md: "18px", lg: "20px" }} // Responsive font size
                        textAlign="center"
                      >
                        Our mission is to make sure that taxes and taxation are fairly and accurately legislated, imposed and administered by all stakeholders.
                      </Heading>
                      <Button
                        size="md"
                        colorScheme="white_A700"
                        fontWeight={900}
                        gap="0px"
                        borderColor="blue_gray.100"
                        borderWidth="2px"
                        borderStyle="solid"
                        fontFamily="Poppins"
                        minW="100px"
                        borderRadius="6px"
                        onClick={handleLearnMoreClick} // Handle the click to navigate
                      >
                        Learn more
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Container>
            <Box
              position="relative"
              bg="white.a700"
              alignSelf="stretch"
              px={{ base: "20px", sm: "32px" }}
            >
              <Flex bg="white.a700" textAlign="center" justifyContent="center">
                <Container mb="5px" display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
                  <Flex gap="0px" w="100%" flexDirection={{ md: "column", base: "column" }}>
                      <Heading
                        size="headingxs"
                        as="h3"
                        color="light_blue.a700"
                        fontSize="16px"
                        fontWeight={600}
                      >
                        Get Our Services Today
                      </Heading>
                      <Heading
                        size="heading2xl"
                        fontSize="25px"
                        as="h4"
                        color="gray.900"
                        letterSpacing="-0.96px"
                      >
                        What we provide
                      </Heading>
                  </Flex>
                </Container>
              </Flex>

              {/* Home page section */}
              <HomePageSection />
              <HomePageSection2 />
            </Box>
          </Flex>
          <Footer mt="0px" />
        </Flex>
      </Box>
    </>
  );
}
