import { Heading, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function TaxAdvisoryComponent({
  headingText = "",
  descriptionText = "Lorem Lorem LoremLorem LoremLorem Lorem",
  buttonText = "Click here to request",
  linkTo = "/servicesone",
  ...props
}) {
  return (
    <Flex
      {...props}
      gap="34px"
      bg="light_blue.a700"
      w={{ md: "24%", base: "100%" }}
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      px={{ base: "20px", sm: "24px" }}
      py="18px"
      borderRadius="12px"
    >
      <Image src="images/image_frame.svg" alt="Tax Advisory Image" h="58px" mt="4px" w="58px" />
      <Flex gap="20px" alignSelf="stretch" flexDirection="column">
        <Flex gap="6px" flexDirection="column" alignItems="start" justifyContent="center">
          <Heading size="headinglg" as="h5" color="white.a700">
            {headingText}
          </Heading>
          <Text size="textmd" color="white.a700" w="100%" lineHeight="24px">
            {descriptionText}
          </Text>
        </Flex>
        <Flex>
          <Link to={linkTo}>
            <Heading size="headingxs" as="h6" color="white.a700" fontSize="16px" fontWeight={600}>
              {buttonText}
            </Heading>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}