import { Image, Flex, Text, Box, Link, UnorderedList, ListItem, Heading, Container } from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <Flex {...props} as="footer" gap="50px" flexDirection="column" bg="white.a700">
      <Flex mt="34px" alignSelf="stretch" justifyContent="center">
        <Container display="flex" justifyContent="center" px={{ md: "0px", base: "20px" }}>
          <Flex
            w={{ md: "96%", base: "100%" }}
            justifyContent="space-between"
            alignItems="flex-start"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex gap="16px" w={{ md: "64%", base: "100%" }} flexDirection="column">
              <Flex
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="flex-start"
                gap="20px"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex gap="18px" w={{ md: "30%", base: "100%" }} flexDirection="column">
                  <Heading
                    size="headings"
                    as="h4"
                    color="black.900"
                    letterSpacing="0.72px"
                    fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                    fontWeight={700}
                  >
                    Reach us
                  </Heading>
                  <Flex gap="8px" alignItems="center">
                    <Image src="images/img_call.svg" alt="Call Icon" h="24px" w="24px" />
                    <Text size="textmd" color="black.900" fontFamily="Poppins">
                      +255 756 260 034
                    </Text>
                  </Flex>
                  <Flex gap="8px" alignItems="center">
                    <Image src="images/ic_sharp_email.svg" alt="Email Icon" h="24px" w="24px" />
                    <Text size="textmd" color="black.900" fontFamily="Poppins">
                      info@raviavir.co.tz
                    </Text>
                  </Flex>
                </Flex>
                
                <Flex gap="18px" w={{ md: "64%", base: "100%" }} flexDirection={{ base: "column", sm: "row" }}>
                  <Flex gap="14px" flexDirection="column" alignItems="start" w="100%">
                    <Heading
                      size="headings"
                      as="h4"
                      color="black.900"
                      letterSpacing="0.72px"
                      fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                      fontWeight={700}
                    >
                      Exclusive
                    </Heading>
                    <UnorderedList styleType="none" display="flex" flexDirection="column" gap="8px">
                      <ListItem>
                        <Link href="Subscribe" target="blank" rel="noreferrer">
                          <Text size="textmd" color="black.900" fontFamily="Poppins">
                            Subscribe
                          </Text>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <Text size="textmd" color="black.900" fontFamily="Poppins">
                            Get 10% off your first order
                          </Text>
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Flex>

                  <Flex gap="14px" flexDirection="column" alignItems="start" w="100%">
                    <Heading 
                      size="headings"
                      as="h4"
                      color="black.900"
                      letterSpacing="0.72px"
                      fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                      fontWeight={700}
                    >
                      Support
                    </Heading>
                    <Link href="#" w="100%" lineHeight="24px">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        111 10th Road, Dodoma, DH 1515, Tanzania.
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            
            <Flex gap="16px" w={{ md: "30%", base: "100%" }} flexDirection={{ base: "column", sm: "row" }}>
              <Flex gap="14px" flexDirection="column" alignItems="start" w="100%">
                <Heading
                  size="headings"
                  as="h4"
                  color="black.900"
                  letterSpacing="0.72px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={700}
                >
                  Account
                </Heading>
                <UnorderedList styleType="none" gap="8px" display="flex" flexDirection="column" alignItems="start">
                  <ListItem>
                    <Link href="/login">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        Login
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/servicesone">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        Contact
                      </Text>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>

              <Flex gap="14px" flexDirection="column" alignItems="start" w="100%">
                <Heading
                  size="headings"
                  as="h4"
                  color="black.900"
                  letterSpacing="0.72px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={700}
                >
                  Quick Links
                </Heading>
                <UnorderedList styleType="none" gap="8px" display="flex" flexDirection="column" alignItems="start">
                  <ListItem>
                    <Link href="/privacy">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        Privacy Policy
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="terms">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        Terms of Use
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="FAQ" target=" blank" rel="noreferrer">
                      <Text size="textmd" color="black.900" fontFamily="Poppins">
                        FAQ
                      </Text>
                    </Link>
                  </ListItem>
                  
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Box alignSelf="stretch">
        <Flex
          bg="light_blue.a700"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          px={{ md: "112px", base: "20px" }}
          py={{ base: "20px", sm: "38px" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Text size="textmd" color="white.a700">
            2024. All rights reserved.
          </Text>
          <Flex mt="8px" w={{ base: "100%", sm: "14%" }} justifyContent="space-between" gap="20px">
            <Image src="images/img_social_icon.svg" alt="Social Icon 1" h="24px" w="24px" />
            <Image src="images/img_social_icon_white_a700.svg" alt="Social Icon 2" h="24px" w="24px" />
            <Image src="images/img_social_icon_white_a700_24x24.svg" alt="Social Icon 3" h="24px" w="24px" />
            <Image src="images/img_social_icon_24x24.svg" alt="Social Icon 4" h="24px" w="24px" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
