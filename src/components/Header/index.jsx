import { Box, Text, Link, Flex, Image, Container, Heading, IconButton, Collapse } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SelectBox } from "./../SelectBox";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { InputRightElement, InputGroup, Input, UnorderedList, ListItem } from "@chakra-ui/react";

const dropDownOptions = [{ label: "Swahili", value: "swahili" }];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);

  const dropdownAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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
        <Container
          display="flex"
          justifyContent="flex-end"
          px={{ md: "8px", base: "20px" }}
          flexDirection={{ md: "row", base: "column" }}
          alignItems="center"
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
              flexWrap="wrap"
              gap="20px"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.50"
                fontFamily="Poppins"
                textAlign={{ base: "center", md: "left" }}
                mb={{ base: "10px", md: "0" }}
              >
                Ravi Ariv Institute "Service Above Self" - Learn Free
              </Text>
              <Heading
                size="headings"
                as="h6"
                color="gray.50"
                fontFamily="Poppins"
                textDecoration="underline"
                textAlign={{ base: "center", md: "left" }}
                mb={{ base: "10px", md: "0" }}
              >
                Learn Now
              </Heading>
            </Flex>
            <SelectBox
              shape="square"
              indicator={<Image src="images/img_dropdown.svg" alt="Dropdown" w="18px" h="18px" />}
              name="Language Selector"
              placeholder={<Text color="white">English</Text>}
              options={dropDownOptions}
              style={{
                color: "gray.50",
                fontFamily: "Poppins",
                gap: "4px",
                w: { md: "12%", base: "100%" },
              }}
              mb={{ base: "10px", md: "0" }}
            />
          </Flex>
        </Container>
      </Flex>

      <Flex alignSelf="stretch" justifyContent="center" position="relative">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          px={{ md: "86px", base: "20px" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          {/* Hamburger Menu Icon for Small Screens */}
          <IconButton
            aria-label="Toggle navigation"
            icon={isNavOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none", base: "block" }}
            onClick={() => setIsNavOpen(!isNavOpen)}
            variant="outline"
            color="light_blue.a700"
          />

          {/* Navbar Links */}
          <Collapse in={isNavOpen} animateOpacity>
            <UnorderedList
              styleType="none"
              gap="74px"
              display={{ md: "flex", base: isNavOpen ? "block" : "none" }}
              flexDirection={{ base: "column", sm: "row" }}
              alignItems={{ base: "center", sm: "flex-start" }}
              textAlign={{ base: "center", sm: "left" }}
            >
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

              {/* Tax Laws dropdown */}
              <ListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} position="relative">
                <Flex gap="14px" alignItems="center" cursor="pointer">
                  <Text size="textmd" color="light_blue.a700" fontFamily="Poppins">Tax Laws</Text>
                  <Image src="images/img_dropdown_light_blue_a700.svg" alt="Dropdown Indicator" h="25px" w="20px" />
                </Flex>

                {menuOpen && (
                  <motion.div initial="hidden" animate="visible" exit="hidden" variants={dropdownAnimation}>
                    <Box
                      mt="10px"
                      bg="white"
                      p="20px"
                      borderRadius="md"
                      shadow="lg"
                      position="absolute"
                      top="100%"
                      left="0"
                      width={{ base: "100%", md: "auto" }}
                      maxWidth="1200px"
                      zIndex="1000"
                      overflowY="auto"
                      maxHeight="500px"
                      sx={{
                        "&::-webkit-scrollbar": { width: "6px" },
                        "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
                      }}
                    >
                      <Text>Under development</Text>
                    </Box>
                  </motion.div>
                )}
              </ListItem>
            </UnorderedList>
          </Collapse>

          {/* Search bar */}
          <InputGroup w={{ md: "24%", base: "100%" }} size="xs" display={{ md: "block", base: isNavOpen ? "block" : "none" }}>
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
        </Container>
      </Flex>

      <Box borderBottom="8px" borderColor="light_blue.a700" />
    </Flex>
  );
}
