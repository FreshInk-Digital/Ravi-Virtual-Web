import ContactInformation from "../../components/ContactInformation";
import {
  Button,
  Textarea,
  Flex,
  Box,
  Input,
  Container,
  Heading,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

export default function ContactSection() {
  return (
    <>
      {/* contact section */}
      <Flex
        mt="88px"
        gap={{ md: "74px", base: "37px", sm: "55px" }}
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          bg="white.a700"
          alignSelf="stretch"
          justifyContent="center"
          p={{ base: "20px", sm: "32px" }}
        >
          <Flex
            gap="10px"
            w={{ md: "94%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: "20px", sm: "32px" }}
          >
            <Heading
              size="headingxs"
              as="h1"
              color="light_blue.a700"
              fontSize="16px"
              fontWeight={600}
            >
              You Can Reach Us Anytime{" "}
            </Heading>
            <Flex alignSelf="stretch" mb="0px">
              <Heading
                size="heading2xl"
                color="gray.900"
                letterSpacing="-0.96px"
              >
                Contact Us Through
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            justifyContent="space-between"
            alignItems="start"
            gap="20px"
            px="6px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Box
              bg="white.a700"
              boxShadow="sm"
              w={{ md: "28%", base: "100%" }}
              px={{ base: "20px", sm: "34px" }}
              py={{ base: "20px", sm: "40px" }}
              borderRadius="4px"
            >
              <Flex mb="10px" flexDirection="column">
                <ContactInformation />
              </Flex>
            </Box>
            <Flex
              gap="32px"
              alignSelf="center"
              bg="white.a700"
              boxShadow="sm"
              w={{ md: "66%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              px="8px"
              py={{ base: "20px", sm: "24px" }}
              borderRadius="4px"
            >
              <Flex
                flexDirection="column"
                w="100%"
                gap="16px"
                mt="14px"
                alignSelf="stretch"
              >
                <Flex
                  flexDirection={{ md: "row", base: "column" }}
                  gap="16px"
                  w="100%"
                >
                  <Input
                    size="md"
                    placeholder={`Your Name *`}
                    type="text"
                    fontFamily="Poppins"
                    w="100%"
                    borderRadius="4px"
                  />
                  <Input
                    size="md"
                    placeholder={`Your Email *`}
                    type="email"
                    fontFamily="Poppins"
                    w="100%"
                    borderRadius="4px"
                  />
                  <Input
                    size="md"
                    placeholder={`Your Phone *`}
                    type="number"
                    fontFamily="Poppins"
                    w="100%"
                    borderRadius="4px"
                  />
                </Flex>
                <Textarea
                  size="md"
                  placeholder="Your Message... *"
                  fontFamily="Poppins"
                  w="100%"
                  borderRadius="4px"
                  h="200px" 
                  px="10px"
                  py="12px"
                  mt="16px"
                />
                <Flex 
                  gap="16px" 
                  flexDirection="row" 
                  mt="16px" 
                  alignSelf="end"
                >
                  <Checkbox 
                    colorScheme="green" 
                    size="lg" 
                    borderColor="gray.300" 
                    borderRadius="4px" 
                    p="4px"
                  >
                    Urgent
                  </Checkbox>
                  <Checkbox 
                    colorScheme="blue" 
                    size="lg" 
                    borderColor="gray.300" 
                    borderRadius="4px" 
                    p="4px"
                  >
                    Normal
                  </Checkbox>
                  <Checkbox 
                    colorScheme="gray" 
                    size="lg" 
                    borderColor="gray.300" 
                    borderRadius="4px" 
                    p="4px"
                  >
                    Not Urgent
                  </Checkbox>
                </Flex>
              </Flex>
              <Button
                size="2xl"
                mr={{ md: "22px", base: "0px" }}
                fontFamily="Poppins"
                fontWeight={500}
                alignSelf="end"
                minw="214px"
                borderRadius="4px"
              >
                Send Message
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
