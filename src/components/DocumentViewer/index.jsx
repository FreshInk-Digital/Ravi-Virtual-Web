import { Text, Flex, Heading, Center, Box } from "@chakra-ui/react";
import React from "react";

export default function DocumentDetails({
  fileType = "PDF",
  documentName = "Adoption requirements.pdf",
  fileSize = "200 KB",
  ...props
}) {
  return (
    <Flex
      {...props}
      gap="12px"
      borderColor="blue_gray.50"
      borderBottomWidth="1px"
      borderStyle="solid"
      flex={1}
      alignItems="center"
      p="16px"
    >
     <Box h="20px" borderColor="blue_gray.100" borderWidth="1px" borderStyle="solid" w="20px" borderRadius="6px" />
     <Center
      h="40px"
      bgImage="url(images/img_file_type_icon.svg)"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="40px"
      flexDirection="column"
     >
      <Heading size="headingxs" as="h6" color="white.a700" mt="16px">
        {fileType}
      </Heading>
      </Center>
      <Flex flex={1} flexDirection="column" alignItems="start" justifyContent="center">
        <Text color="gray.900" fontWeight={500}>
          {documentName}
        </Text>
        <Text>{fileSize}</Text>
      </Flex>
    </Flex>
  );
}