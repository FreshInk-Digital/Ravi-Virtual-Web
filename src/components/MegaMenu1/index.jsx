import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";

export default function MegaMenu1() {
  return (
    <Box position="absolute" top="auto" minw="200px" pt="12px" zIndex={99}>
      <Box bg="white.a700" boxShadow="md" w="100%" p="20px" borderRadius="8px">
        <Flex gap="30px">
            <Flex gap="16px" flexDirection="column" alignItems="start">
              <Text color="black.900" fontSize={{ base: "15px", sm: "18px"}} fontWeight={700}>
                Title 1
              </Text>
              <Flex gap="12px" flexDirection="column" alignItems="start">
                <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 1
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 2
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 3
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 4
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 5
                  </Text>
                </Link>
              </Flex>
            </Flex>
            <Flex gap="16px" flexDirection="column" alignItems="start">
              <Text color="black.900" fontSize={{ base: "15px", sm: "18px"}} fontWeight={700}>
                Title 2
              </Text>
              <Flex gap="12px" flexDirection="column" alignItems="start">
                <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 1
                  </Text>
                </Link>
                <Text color="black.600" fontSize={{ base: "13px", sm: "16px"}} fontWeight={400} alignSelf="center">
                  Menu 2
                </Text>
                <Text color="black.600" fontSize={{ base: "13px", sm: "16px"}} fontWeight={400} alignSelf="center">
                  Menu 3
                </Text>
                <Text color="black.600" fontSize={{ base: "13px", sm: "16px"}} fontWeight={400} alignSelf="center">
                  Menu 4
                </Text>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 5
                  </Text>
                </Link>
              </Flex>
            </Flex>
            <Flex gap="16px" flexDirection="column" alignItems="start">
              <Text color="black.900" fontSize={{ base: "15px", sm: "18px" }} fontWeight={700}>
                Title 3
              </Text>
              <Flex gap="12px" flexDirection="column" alignItems="start">
                <Link href="#" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 1
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 2
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 3
                  </Text>
                </Link>
                <Link href="#" alignSelf="center" fontSize={{ base: "13px", sm: "medium" }}>
                  <Text color="black.600" fontSize="16px" fontWeight={400}>
                    Menu 4
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
  );
}