import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Megamenu1 from "../../components/MegaMenu1";
// import NoiseFxBannerSection from "./NoiseFxBannerSection";
import PublicationSection from "./PublicationSection";
// import { CloseIcon } from "@chakra-ui/icons";
import {
  // Image,
  // InputRightElement,
  // InputGroup,
  // Input,
  // Text,
  // Flex,
  // Link,
  // UnorderedList,
  // ListItem,
  // Container,
  // Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function PublicationPage() {
  // const [searchBarValue1, setSearchBarValue1] = React.useState("");
  // const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Resource Library Explore Educational Materials</title>
        <meta
          name="description"
          content="Discover a wealth of knowledge with our Resource Library. Browse through various educational resources including PDFs, videos, and more to enhance your learning experience."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        {/* <Box bg="light_blue.a700_26" position="relative" as="header">
          <Flex flexDirection="column" alignItems="center">
            <NoiseFxBannerSection />
            <Flex
              mt="16px"
              bg="light_blue.a700"
              alignSelf="stretch"
              justifyContent="center"
              py="12px"
            >
              <Container
                display="flex"
                justifyContent="flex-end"
                px={{ md: "10px", base: "20px" }}
              >
                <Flex
                  w={{ md: "74%", base: "100%" }}
                  justifyContent="space-between"
                  gap="20px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Flex
                    w={{ md: "64%", base: "100%" }}
                    justifyContent="space-between"
                    flexwrap="wrap"
                    gap="20px"
                  >
                    <Text color="gray.50" fontFamily="Poppins">
                      Ravi Ariv Virtual Institute "Service Above Self" Learn
                      Free
                    </Text>
                    <Heading
                      size="headings"
                      as="h6"
                      color="gray.50"
                      fontFamily="Poppins"
                      textDecoration="underline"
                    >
                      Learn Now
                    </Heading>
                  </Flex>
                  <Flex gap="4px" alignItems="center">
                    <Text color="gray.50" fontFamily="Poppins">
                      English
                    </Text>
                    <Link href="#">
                      <Image
                        src="images/img_dropdown.svg"
                        alt="Language Dropdown"
                        h="24px"
                        w="24px"
                      />
                    </Link>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
            <Container
              mt="8px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={{ md: "56px", base: "20px" }}
            >
              <Flex
                mr={{ md: "6px", base: "0px" }}
                w={{ md: "94%", base: "100%" }}
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <UnorderedList
                  styleType="none"
                  gap="74px"
                  display="flex"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <ListItem>
                    <Link href="#">
                      <Text
                        size="textmd"
                        color="light_blue.a700"
                        fontFamily="Poppins"
                      >
                        Home
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Text
                        size="textmd"
                        color="light_blue.a700"
                        fontFamily="Poppins"
                      >
                        About Us
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Text
                        size="textmd"
                        color="light blue.a700"
                        fontFamily="Poppins"
                      >
                        Services
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Flex flexDirection="column" alignItems="center">
                        <Text
                          size="textmd"
                          color="light_blue.a700"
                          fontFamily="Poppins"
                        >
                          Publication
                        </Text>
                        <Image
                          src="images/img_underline.svg"
                          alt="Underline Image"
                          h="1px"
                          w="48px"
                          mx={{ md: "20px", base: "0px" }}
                        />
                      </Flex>
                    </Link>
                  </ListItem>
                  <ListItem
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <Flex gap="14px" cursor="pointer">
                      <Text
                        size="textmd"
                        color="light_blue. a700"
                        fontFamily="Poppins"
                      >
                        Tax Laws
                      </Text>
                      <Image
                        src="images/img_dropdown_light_blue_a700.svg"
                        alt="Tax Dropdown"
                        h="24px"
                        w="24px"
                      />
                    </Flex>
                    {menuOpen ? <Megamenu1 /> : null}
                  </ListItem>
                </UnorderedList>
                <InputGroup w={{ md: "24px", base: "100%" }} size="xs">
                  <Input
                    placeholder={`What are you looking for?`}
                    value={searchBarValue1}
                    onChange={(e) => setSearchBarValue1(e.target.value)}
                    color="light_blue.a700_7f"
                    fontFamily="Poppins"
                    gap="34px"
                    borderRadius="4px"
                  />
                  <InputRightElement>
                    {searchBarValue1?.length > 0 ? (
                      <CloseIcon onClick={() => setSearchBarValue1("")} />
                    ) : (
                      <Image
                        src="images/img_search.svg"
                        alt="Search"
                        h="24px"
                        w="24px"
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Container>
          </Flex>
        </Box> */}
        {/* heading section */}
        <Header alignSelf="stretch" />

        {/* publication section */}
        <PublicationSection />
        
        <Footer mt="0px" />
      </Box>
    </>
  );
}
