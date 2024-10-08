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
            w={{ md: "100%", base: "100%" }}  // Centering the content
            flexDirection="column"
            alignItems="center"  // Center all items vertically
            textAlign="center"  // Center text within the Flex
          >
            <Text color="gray.50" fontFamily="Poppins">
              Ravi Ariv Virtual Institute "Service Above Self" - Learn Free
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

          {/* Navigation Links and Search Bar centered on large screens */}
          <Flex
            display={{ base: "none", md: "flex" }}  // Hide on small screens
            flexDirection="row"
            gap="20px"
            alignItems="center"
            w="100%"  // Allow full width for centering
            justifyContent="center"  // Center the links and search bar
          >
            <Link
              href="/"
              _hover={{ textDecoration: "underline" }}
              color={isActive("/") ? "light_blue.a700" : "light_blue.a700"}
              textDecoration={isActive("/") ? "underline" : "none"}
              fontFamily="Poppins"
            >
              <Text size="textmd" as="span">Home</Text>
            </Link>
            <Link
              href="/aboutus"
              _hover={{ textDecoration: "underline" }}
              color={isActive("/aboutus") ? "light_blue.a700" : "light_blue.a700"}
              textDecoration={isActive("/aboutus") ? "underline" : "none"}
              fontFamily="Poppins"
            >
              <Text size="textmd" as="span">About Us</Text>
            </Link>
            <Link
              href="/services"
              _hover={{ textDecoration: "underline" }}
              color={isActive("/services") ? "light_blue.a700" : "light_blue.a700"}
              textDecoration={isActive("/services") ? "underline" : "none"}
              fontFamily="Poppins"
            >
              <Text size="textmd" as="span">Services</Text>
            </Link>
            <Link
              href="/publication"
              _hover={{ textDecoration: "underline" }}
              color={isActive("/publication") ? "light_blue.a700" : "light_blue.a700"}
              textDecoration={isActive("/publication") ? "underline" : "none"}
              fontFamily="Poppins"
            >
              <Text size="textmd" as="span">Publication</Text>
            </Link>
            {/* Tax Laws Link with Under Development hover effect */}
            <Link
              href="#"
              _hover={{ textDecoration: "underline", cursor: "default" }}
              fontFamily="Poppins"
              color="light_blue.a700" // Match the color with other links
              onMouseEnter={() => {
                const tooltip = document.getElementById("tax-laws-tooltip");
                if (tooltip) tooltip.style.display = "block";
              }}
              onMouseLeave={() => {
                const tooltip = document.getElementById("tax-laws-tooltip");
                if (tooltip) tooltip.style.display = "none";
              }}
            >
              <Text size="textmd" as="span">Tax Laws</Text>
              <Box
                id="tax-laws-tooltip"
                display="none"
                position="absolute"
                bg="white"
                color="black"
                p="2px 8px"
                borderRadius="4px"
                boxShadow="md"
                mt="2"
                zIndex="1000"
              >
                Under Development
              </Box>
            </Link>
          </Flex>

          {/* Search bar positioned more to the left */}
          <InputGroup w={{ md: "24%", base: "100%" }} size="xs">
            <Input
              placeholder={`What’s On Mind?`}
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

          {/* Dropdown for smaller screens */}
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
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
              {/* Add Tax Laws link again in dropdown */}
              <ListItem>
                <Link
                  href="#"
                  _hover={{ textDecoration: "underline", cursor: "default" }}
                  fontFamily="Poppins"
                  color="light_blue.a700" // Match the color with other links
                  onMouseEnter={() => {
                    const tooltip = document.getElementById("tax-laws-tooltip-dropdown");
                    if (tooltip) tooltip.style.display = "block";
                  }}
                  onMouseLeave={() => {
                    const tooltip = document.getElementById("tax-laws-tooltip-dropdown");
                    if (tooltip) tooltip.style.display = "none";
                  }}
                >
                  <Text size="textmd" as="span">Tax Laws</Text>
                  <Box
                    id="tax-laws-tooltip-dropdown"
                    display="none"
                    position="absolute"
                    bg="white"
                    color="black"
                    p="2px 8px"
                    borderRadius="4px"
                    boxShadow="md"
                    mt="2"
                    zIndex="1000"
                  >
                    Under Development
                  </Box>
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
