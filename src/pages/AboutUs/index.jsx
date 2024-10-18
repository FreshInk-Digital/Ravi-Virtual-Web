import { Helmet } from "react-helmet";
import Footer from "components/Footer";
import Header from "components/Header";
import { Box, Flex, Heading, Container, Text, Image } from "@chakra-ui/react";
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
        <Container mt="25px" px={{ md: "0px", base: "20px" }} textAlign="center">
          {/* Who We Are Section */}
          <Box
            bg="blue.500"
            w="100%"
            p="30px"
            borderRadius="12px"
            mb="40px"
            boxShadow="md"
          >
            <Flex flexDirection="column" alignItems="center">
              <Heading
                size="2xl"
                as="h1"
                color="white"
                fontFamily="Poppins"
                textTransform="capitalize"
                fontSize={{ base: "28px", md: "36px" }}
                textAlign="center"
              >
                Who We Are
              </Heading>
              <Text
                color="white"
                fontFamily="Poppins"
                w={{ md: "92%", base: "100%" }}
                lineHeight="1.7"
                textAlign="center"
                fontWeight="normal"
                fontSize={{ base: "16px", md: "18px" }}
                mt="20px"
              >
                Ravi Ariv Virtual Institute or RAVI is one of the most reliable
                tax advisory service providers, engaged in tax advisory services,
                capacity development, tax health check, tax judgments, second opinion,
                and transaction advisory. With over two decades of history in the taxation
                industry in Tanzania, we provide high-quality services.
              </Text>
            </Flex>
          </Box>

          {/* Mission & Vision Section */}
          <Box
            bg="blue.500"
            w="100%"
            p="30px"
            borderRadius="12px"
            mb="40px"
            boxShadow="md"
          >
            <Flex flexDirection="column" alignItems="center">
              <Heading
                size="xl"
                as="h5"
                color="white"
                fontFamily="Poppins"
                textTransform="capitalize"
                fontSize={{ base: "24px", md: "28px" }}
                textAlign="center"
              >
                Mission & Vision
              </Heading>
              <Flex mt="20px" gap="20px" flexDirection="column" alignItems="center" w="100%">
                <Text
                  color="white"
                  fontFamily="Poppins"
                  lineHeight="1.7"
                  textAlign="center"
                  fontWeight="normal"
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  Our mission is to make sure that taxes and taxation are fairly and
                  accurately legislated, imposed, and administered by all stakeholders.
                </Text>
                <Text
                  color="white"
                  fontFamily="Poppins"
                  lineHeight="1.7"
                  textAlign="center"
                  fontWeight="normal"
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  To promote fair and accurate legislation, imposition, and
                  administration of taxation by all stakeholders.
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* New Image Section */}
          <Box
            w="100%"
            h="200px"
            p="0px"
            mb="10px"
          >
            <Flex flexDirection="column" alignItems="center">
              <Image
                src="/images/img_frame_560.png"
                alt="Our Team"
                borderRadius="12px"
                boxShadow="lg"
                maxW="100%"
                objectFit="cover"
              />
              <Text
                color="gray.600"
                fontFamily="Poppins"
                fontSize={{ base: "14px", md: "16px" }}
                mt="20px"
                textAlign="center"
              >
                A glimpse of our hardworking team at Ravi Ariv.
              </Text>
            </Flex>
          </Box>
        </Container>

        <Footer mt="0px" alignSelf="stretch" />
      </Flex>
    </>
  );
}
