import { Box, Text, Link, Flex, Image, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { InputRightElement, InputGroup, Input, UnorderedList, ListItem, Container, Heading } from "@chakra-ui/react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [isMenuVisible, setIsMenuVisible] = React.useState(false); // For toggling the mobile menu
  const [isTaxDropdownVisible, setIsTaxDropdownVisible] = React.useState(false); // For toggling the Tax Laws dropdown
  const location = useLocation();

  // List of paths for navigation
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Publication", path: "/publication" },
  ];

  // Determines if a path is active
  const isActive = (path) => location.pathname === path;

  // Toggle for the main menu (mobile)
  const handleMenuToggle = () => setIsMenuVisible(!isMenuVisible);

  // Toggle for the Tax Laws dropdown on click
  const handleTaxLawsClick = () => setIsTaxDropdownVisible(!isTaxDropdownVisible);

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
      <Flex bg="light_blue.a700" alignSelf="stretch" justifyContent="center" py="12px">
        <Container display="flex" justifyContent="center" px={{ md: "8px", base: "20px" }}>
          <Flex w={{ md: "100%", base: "100%" }} flexDirection="column" alignItems="center" textAlign="center">
            <Text color="gray.50" fontFamily="Poppins">
              Ravi Ariv Virtual Institute "Service Above Self" - Learn Free
            </Text>
            <Heading size="headings" as="h6" color="gray.50" fontFamily="Poppins" textDecoration="underline">
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
            display={{ base: "none", md: "flex" }} // Hide on mobile
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
                _hover={{ textDecoration: "underline", color: "light_blue.a500" }}
                color={isActive(link.path) ? "light_blue.a700" : "light_blue.a700"}
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
                  left: `calc(${activeLinkIndex * 20}% + ${activeLinkIndex * 40}px)`,
                  width: "80px",
                  height: "2px",
                  background: "light_blue.a700",
                }}
              />
            )}

            {/* Tax Laws with Dropdown (click to open) */}
            <Box position="relative">
              <Flex alignItems="center">
                <Link
                  onClick={handleTaxLawsClick} // Opens dropdown on click
                  _hover={{ textDecoration: "underline", cursor: "pointer", color: "light_blue.a500" }}
                  fontFamily="Poppins"
                  color="light_blue.a700"
                  display="flex"
                  alignItems="center"
                >
                  <Text size="textmd" as="span">
                    Tax Laws
                  </Text>
                  <ChevronDownIcon
                    ml="4px"
                    transition="transform 0.2s"
                    transform={isTaxDropdownVisible ? "rotate(180deg)" : "rotate(0deg)"} // Rotate icon
                  />
                </Link>
              </Flex>

              {isTaxDropdownVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "0",
                    background: "white",
                    boxShadow: "lg",
                    borderRadius: "md",
                    padding: "10px",
                    zIndex: "1000",
                    width: "200px",
                  }}
                >
                  <VStack align="flex-start" spacing="10px">
                    <Link
                      href="/income-tax-act"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/income-tax-act") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Income Tax Act
                    </Link>
                    <Link
                      href="/regulation-act"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/regulation-act") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Regulation Act
                    </Link>
                    <Link
                      href="/corporate-tax-law"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/corporate-tax-law") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Corporate Tax Law
                    </Link>
                    <Link
                      href="/tax-compliance"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/tax-compliance") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Tax Compliance
                    </Link>
                  </VStack>
                </motion.div>
              )}
            </Box>
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
                      _hover={{ textDecoration: "underline", color: "light_blue.a500" }}
                      color={isActive(link.path) ? "light_blue.a700" : "light_blue.a700"}
                      textDecoration={isActive(link.path) ? "underline" : "none"}
                      fontFamily="Poppins"
                    >
                      <Text size="textmd" as="span">
                        {link.name}
                      </Text>
                    </Link>
                  </ListItem>
                ))}

                {/* Tax Laws in the mobile dropdown */}
                <ListItem>
                  <Link
                    onClick={handleTaxLawsClick}
                    _hover={{ textDecoration: "underline", cursor: "pointer", color: "light_blue.a500" }}
                    fontFamily="Poppins"
                    color="light_blue.a700"
                    display="flex"
                    alignItems="center"
                  >
                    <Text size="textmd" as="span">
                      Tax Laws
                    </Text>
                    <ChevronDownIcon
                      ml="4px"
                      transition="transform 0.2s"
                      transform={isTaxDropdownVisible ? "rotate(180deg)" : "rotate(0deg)"} // Rotate icon
                    />
                  </Link>
                </ListItem>

                {/* Mobile Tax Laws dropdown */}
                {isTaxDropdownVisible && (
                  <VStack align="flex-start" spacing="10px" mt="10px">
                    <Link
                      href="/income-tax-act"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/income-tax-act") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Income Tax Act
                    </Link>
                    <Link
                      href="/regulation-act"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/regulation-act") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Regulation Act
                    </Link>
                    <Link
                      href="/corporate-tax-law"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/corporate-tax-law") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Corporate Tax Law
                    </Link>
                    <Link
                      href="/tax-compliance"
                      fontFamily="Poppins"
                      _hover={{ color: "light_blue.a500", textDecoration: "underline" }}
                      color={isActive("/tax-compliance") ? "light_blue.a700" : "light_blue.a700"}
                    >
                      Tax Compliance
                    </Link>
                  </VStack>
                )}
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
                <Image src="images/img_search.svg" alt="Search" h="20px" w="20px" />
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
