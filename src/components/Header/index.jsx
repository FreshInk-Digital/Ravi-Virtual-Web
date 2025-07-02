import { Box, Text, Link, Flex, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  InputRightElement,
  InputGroup,
  Input,
  UnorderedList,
  ListItem,
  Container,
  Heading,
} from "@chakra-ui/react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const location = useLocation();

  // List of paths for navigation
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Publication", path: "/publication" },
    { name: "Tax Laws", path: "/tax-laws" },
    { name: "Tax Judgements", path: "/linked-tax" },
    { name: "Collaboration", path: "/Collaboration" },
    // { name: "Linked Tax Laws", path: "/linked-tax-laws" },
  ];

  // Determines if a path is active
  const isActive = (path) => location.pathname === path;

  // Toggle for the main menu (mobile)
  const handleMenuToggle = () => setIsMenuVisible(!isMenuVisible);

  // Get the active link's index for positioning the underline
  const activeLinkIndex = navLinks.findIndex((link) => isActive(link.path));

  return (
    <Flex {...props} gap="12px" flexDirection="column" as="header">
      {/* Header banner */}
      <Box alignSelf="stretch">
        <Box
          h={{ md: "120px", base: "auto" }}
          bgImage="url(/images/img_top_most_banner.png)"
          bgSize="cover"
          bgRepeat="no-repeat"
        />
      </Box>

      {/* Header with text */}
      <Flex
        bg="light_blue.a700"
        alignSelf="stretch"
        justifyContent="center"
        py="12px"
      >
        <Container
          display="flex"
          justifyContent="center"
          px={{ md: "8px", base: "20px" }}
        >
          <Flex
            w={{ md: "100%", base: "100%" }}
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Text color="gray.50" fontFamily="Poppins">
              Ravi Ariv Virtual Institute "Service Above Self" - Learn Free
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
        </Container>
      </Flex>

      {/* Main navigation section */}
      <Flex alignSelf="stretch" justifyContent="center" position="relative">
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

          {/* Desktop Navigation Links with Sliding Underline */}
          <Flex
            display={{ base: "none", md: "flex" }}
            flexDirection="row"
            gap="20px"
            alignItems="center"
            w="100%"
            justifyContent="center"
            position="relative"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.path}
                _hover={{
                  textDecoration: "underline",
                  color: "light_blue.a500",
                }}
                color={
                  isActive(link.path) ? "light_blue.a700" : "light_blue.a700"
                }
                textDecoration={isActive(link.path) ? "underline" : "none"}
                fontFamily="Poppins"
              >
                <Text size="textmd" as="span">
                  {link.name}
                </Text>
              </Link>
            ))}

            {/* Sliding Underline for Active Link */}
            {activeLinkIndex >= 0 && (
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: `calc(${activeLinkIndex * 20}% + ${
                    activeLinkIndex * 40
                  }px)`,
                  width: "80px",
                  height: "2px",
                  background: "light_blue.a700",
                }}
              />
            )}
          </Flex>

          {/* Mobile Menu */}
          {isMenuVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: "70px",
                left: "0",
                width: "100%",
                background: "white",
                padding: "20px",
                borderRadius: "md",
                boxShadow: "lg",
                zIndex: 1000,
              }}
            >
              <UnorderedList styleType="none" p={0} m={0}>
                {navLinks.map((link) => (
                  <ListItem key={link.name} onClick={handleMenuToggle}>
                    <Link
                      href={link.path}
                      _hover={{
                        textDecoration: "underline",
                        color: "light_blue.a500",
                      }}
                      color={
                        isActive(link.path)
                          ? "light_blue.a700"
                          : "light_blue.a700"
                      }
                      textDecoration={
                        isActive(link.path) ? "underline" : "none"
                      }
                      fontFamily="Poppins"
                    >
                      <Text size="textmd" as="span">
                        {link.name}
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </motion.div>
          )}

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
                <Image
                  src="images/img_search.svg"
                  alt="Search"
                  h="20px"
                  w="20px"
                />
              )}
            </InputRightElement>
          </InputGroup>
        </Container>
      </Flex>

      {/* Bottom border line */}
      <Box borderBottom="8px solid" borderColor="gray.300" w="100%" my="2px" />
    </Flex>
  );
}
