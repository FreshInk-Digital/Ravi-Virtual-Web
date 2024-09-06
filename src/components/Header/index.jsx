import MegaMenu1 from "../MegaMenu1";
import { SelectBox } from "./../SelectBox";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Image,
  InputRightElement,
  InputGroup,
  Input,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const dropDownOptions = [
  { label: "Swahili", value: "swahili" },
];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation(); // Use this hook to get the current route

  // Determine if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <Flex {...props} gap="12px" flexDirection="column" as="header">
      <Box alignSelf="stretch">
        <Box
          h={{ md: "120px", base: "auto" }}
          bgImage="url(/images/img_top_most_banner.png)"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          {/* <Flex overflowX="scroll" flexDirection={{ md: "row", base: "column" }}>
            <Image
              src="images/img_noisefx_1080_1.png"
              alt="Noise Image One"
              h="368px"
              opacity={0.6}
              w={{ md: "412px", base: "100%" }}
              fit="cover"
            />
            <Image
              src="images/img_noisefx_1080_2.png"
              alt="Noise Image Two"
              h="368px"
              opacity={0.6}
              w={{ md: "616px", base: "100%" }}
              fit="cover"
            />
            <Image
              src="images/img_noisefx_1080_3.png"
              alt="Noise Image Three"
              h="368px"
              opacity={0.6}
              w={{ md: "412px", base: "100%" }}
              fit="cover"
            />
          </Flex> */}
        </Box>
      </Box>
      <Flex bg="light_blue.a700" alignSelf="stretch" justifyContent="center" py="12px">
        <Container display="flex" justifyContent="flex-end" px={{ md: "8px", base: "20px"}}>
          <Flex
            w={{ md: "74%", base: "100%" }}
            justifyContent="space-between"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex w={{ md: "64%", base: "100%" }} justifyContent="space-between" flexWrap="wrap" gap="20px">
              <Text color="gray.50" fontFamily="Poppins">
                Ravi Ariv Institute "Service Above Self" - Learn Free
              </Text>
              <Heading size="headings" as="h6" color="gray.50" fontFamily="Poppins" textDecoration="underline">
                Learn Now
              </Heading>
            </Flex>
            <SelectBox
              shape="square"
              indicator={<Image src="images/img_dropdown.svg" alt="Dropdown" w="18px" h="18px" />}
              name="Language Selector"
              placeholder={`English`}
              options={dropDownOptions}
              style={{ color: "gray.50", fontFamily: "Poppins", gap: "4px", w:{ md: "12%", base: "100%" } }}
            />
          </Flex>
        </Container>
      </Flex>
      <Flex alignSelf="stretch" justifyContent="center">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          px={{ md: "86px", base: "20px" }}
          flexDirection={{ md: "row", base: "column"}}
        >
          <UnorderedList styleType="none" gap="74px" display="flex" flexDirection={{ base: "column", sm: "row" }}>
            <ListItem>
              <Link
                href="/"
                _hover={{ textDecoration: "underline" }}
                _active={{ textDecoration: "underline", color: "light_blue.a700" }}
                color={isActive("/") ? "light_blue.a700" : "light_blue.a700"}
                textDecoration={isActive("/") ? "underline" : "none"}
                fontFamily="Poppins"
              >
                <Text size="textmd" as="span">
                  Home
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/aboutus"
                _hover={{ textDecoration: "underline" }}
                _active={{ textDecoration: "underline", color: "light_blue.a700" }}
                color={isActive("/aboutus") ? "light_blue.a700" : "light_blue.a700"}
                textDecoration={isActive("/aboutus") ? "underline" : "none"}
                fontFamily="Poppins"
              >
                <Text size="textmd" as="span">
                  About Us
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/services"
                _hover={{ textDecoration: "underline" }}
                _active={{ textDecoration: "underline", color: "light_blue.a700" }}
                color={isActive("/services") ? "light_blue.a700" : "light_blue.a700"}
                textDecoration={isActive("/services") ? "underline" : "none"}
                fontFamily="Poppins"
              >
                <Text size="textmd" as="span">
                  Services
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/publication"
                _hover={{ textDecoration: "underline" }}
                _active={{ textDecoration: "underline", color: "light_blue.a700" }}
                color={isActive("/publication") ? "light_blue.a700" : "light_blue.a700"}
                textDecoration={isActive("/publication") ? "underline" : "none"}
                fontFamily="Poppins"
              >
                <Text size="textmd" as="span">
                  Publication
                </Text>
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
                <Text size="textmd" color="light_blue.a700" fontFamily="Poppins">
                  Tax Laws
                </Text>
                <Image src="images/img_dropdown_light_blue_a700.svg" alt="Dropdown Indicator" h="25px" w="20px" />
              </Flex>
              {menuOpen ? <MegaMenu1 />: null}
            </ListItem>
          </UnorderedList>
          <InputGroup w={{ md: "24%", base: "100%" }} size="xs">
            <Input
              placeholder={`What are you looking for?`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue (e.target.value)}
              color="light_blue.a700_7f"
              fontFamily="Poppins"
              gap="34px"
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
      <Box
        borderBottom="8px solid"
        borderColor="gray.300"
        w="100%"
        my="2px"
      />   
    </Flex>
  );
}
