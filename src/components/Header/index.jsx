import { Box, Text, Link, Flex, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { InputRightElement, InputGroup, Input, UnorderedList, ListItem, Container, Heading } from "@chakra-ui/react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleMenuToggle = () => setIsMenuVisible(!isMenuVisible);

  const dropdownAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <Flex {...props} gap="12px" flexDirection="column" as="header">
      <Box alignSelf="stretch">
        <Box
          h={{ md: "120px", base: "auto" }}
          bgImage="url(/images/img_top_most_banner.png)"
          bgSize="cover"
          bgRepeat="no-repeat"
        />
      </Box>

      <Flex bg="light_blue.a700" alignSelf="stretch" justifyContent="center" py="12px">
        <Container display="flex" justifyContent="center" px={{ md: "8px", base: "20px" }}>
          <Flex 
            w={{ md: "74%", base: "100%" }} 
            justifyContent="space-between" 
            flexDirection={{ md: "row", base: "column" }}
            alignItems={{ base: "center", md: "flex-start" }} 
            textAlign={{ base: "center", md: "left" }} 
          >
            <Text color="gray.50" fontFamily="Poppins">
              Ravi Ariv Institute "Service Above Self" - Learn Free
            </Text>
            <Heading size="headings" as="h6" color="gray.50" fontFamily="Poppins" textDecoration="underline">
              Learn Now
            </Heading>
          </Flex>
        </Container>
      </Flex>

      <Flex alignSelf="stretch" justifyContent="center">
        <Container
          display="flex"
          alignItems="center" 
          gap="20px"
          px={{ md: "86px", base: "20px" }}
          flexDirection="row"
        >
          {/* Hamburger Icon for mobile */}
          <IconButton
            aria-label="Toggle Menu"
            icon={isMenuVisible ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleMenuToggle}
            display={{ base: "block", md: "none" }}
            bg="light_blue.a700"
            color="white"
          />

          {/* Search bar positioned on the right */}
          <InputGroup w={{ md: "24%", base: "100%" }} size="xs">
            <Input
              placeholder={`What are you looking for?`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              color="light_blue.a700_7f"
              fontFamily="Poppins"
              borderRadius="4px"
            />
            <InputRightElement>
              {searchBarValue?.length > 0 ? (
                <CloseIcon onClick={() => setSearchBarValue("")} />
              ) : (
                <Image src="images/img_search.svg" alt="Search" h="20px" w="20px" />
              )}
            </InputRightElement>
          </InputGroup>

          {/* Navigation Links wrapped in a motion.div for animation */}
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "visible" : "hidden"}
            variants={dropdownAnimation}
            style={{
              position: "absolute",
              left: "20px",
              top: "80px", // Adjust this to fit your layout
              background: "white",
              padding: "10px",
              borderRadius: "md",
              boxShadow: "lg",
              zIndex: "1000",
              width: "200px", // Adjust as necessary
            }}
          >
            <UnorderedList styleType="none" display={isMenuVisible ? "block" : "none"} p={0} m={0}>
              <ListItem>
                <Link
                  href="/"
                  _hover={{ textDecoration: "underline" }}
                  color={isActive("/") ? "light_blue.a700" : "light_blue.a700"}
                  textDecoration={isActive("/") ? "underline" : "none"}
                  fontFamily="Poppins"
                >
                  <Text size="textmd" as="span">Home</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/aboutus"
                  _hover={{ textDecoration: "underline" }}
                  color={isActive("/aboutus") ? "light_blue.a700" : "light_blue.a700"}
                  textDecoration={isActive("/aboutus") ? "underline" : "none"}
                  fontFamily="Poppins"
                >
                  <Text size="textmd" as="span">About Us</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/services"
                  _hover={{ textDecoration: "underline" }}
                  color={isActive("/services") ? "light_blue.a700" : "light_blue.a700"}
                  textDecoration={isActive("/services") ? "underline" : "none"}
                  fontFamily="Poppins"
                >
                  <Text size="textmd" as="span">Services</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/publication"
                  _hover={{ textDecoration: "underline" }}
                  color={isActive("/publication") ? "light_blue.a700" : "light_blue.a700"}
                  textDecoration={isActive("/publication") ? "underline" : "none"}
                  fontFamily="Poppins"
                >
                  <Text size="textmd" as="span">Publication</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </motion.div>
        </Container>
      </Flex>

      <Box borderBottom="8px solid" borderColor="gray.300" w="100%" my="2px" />
    </Flex>
  );
}
