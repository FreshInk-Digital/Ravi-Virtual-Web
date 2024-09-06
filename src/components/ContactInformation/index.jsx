import { Text, Flex, IconButton, Image } from "@chakra-ui/react";
import React from "react";

export default function ContactInformation({
  callText = "Call To US",
  availabilityText = "We are available 24/7, 7 days a week.",
  phoneText = "Phone: +255 755 260 034",
  writeText = "Write To US",
  formText = "Fill out our form and we will contact you within 24 hours.",
  customerEmailText = "Emails: customer@raviariv.co.yz",
  supportEmailText = "Emails: support@raviariv.co.tz",
  textareaPlaceholder = "Enter your message here...",
  ...props
}) {
  return (
    <Flex {...props} gap="32px" flex={1} flexDirection="column" alignItems="center">
      <Flex gap="32" alignSelf="stretch" flexDirection="column">
        <Flex mr="8px" gap="24px" flexDirection="column">
          <Flex gap="16px" alignItems="center">
            <IconButton 
              icon={<Image src="images/img_call_white_a700.svg" />}
              aria-label="1128:13359-Call ICon"
              w="40px"
              borderRadius="20px"
            />
            <Text size="textmd" color="black.900" fontFamily="Poppins" fontWeight={500}>
              {callText}
            </Text>
          </Flex>
          <Flex gap="16px" flexDirection="column" alignItems="start">
            <Text color="black.900" fontFamily="Poppins">
              {availabilityText}
            </Text>
            <Text color="black.900" fontFamily="Poppins">
              {phoneText}
            </Text>
          </Flex>
          <Image src="images/img_underline_black_900.svg" alt="Divider Image" h="10px" />
        </Flex>
      </Flex>
      <Flex gap="24px" alignSelf="stretch" flexDirection="column">
        <Flex gap="16px" alignItems="center">
          <IconButton
            icon={<Image src="images/img_lock.svg"/>}
            aria-label="1128:13367-Lock Icon"
            w="40px"
            borderRadius="20px"
          />
          <Text size="textmd" color="black.900" fontFamily="Poppins" fontWeight={500}>
            {writeText}
          </Text>
        </Flex>
        <Flex gap="16px" flexDirection="column" alignItems="start">
          <Text color="black.900" fontFamily="Poppins" w="92%" lineHeight="21px">
            {formText}
          </Text>
          <Text color="black.900" fontFamily="Poppins">
            {customerEmailText}
          </Text>
          <Text color="black.900" fontFamily="Poppins">
            {supportEmailText}
          </Text>
        </Flex>
      </Flex> 
    </Flex>
  );
}
