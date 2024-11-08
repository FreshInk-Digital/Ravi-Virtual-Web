import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const categoriesData = [
  { 
    name: "Tax Laws Digest", 
    books: ["Format of the Digest", "Search Engine of the Digest", "Uploading the Digest", "Digest Referencing"]
  },
  { 
    name: "Uploading and Downloading of Files", 
    books: ["How to Upload Files", "Authority to Upload Files"]
  },
];

export default function TaxLawsDigest() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <Box mt="24px" px={{ md: "20px", base: "10px" }} fontFamily="Poppins">
      <Box
        maxW="1155px"  // Center the content with a maximum width
        margin="0 auto"  // Apply margin to center it on the page
        borderColor="blue_gray.50"
        borderWidth="1px"
        borderStyle="solid"
        bg="white.a700"
        boxShadow="xs"
        borderRadius="12px"
        overflow="hidden"
        p="20px"  // Add padding for internal spacing
        fontFamily="Poppins"
      >
      {/* Heading */}
      <Heading size="lg" as="h1" color="gray.900" textAlign="start" fontFamily="Poppins">
         Explore Tax Laws
        </Heading>
        <Text mb="8" textAlign="start" color="gray.600" fontFamily="Poppins">
          Access the full text of the Tax Laws. Explore sections covering various acts, repealed laws, and more.
        </Text>

      {/* Categories Grid */}
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing="10px">
        {categoriesData.map((category) => (
          <Box
            key={category.name}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            p="4"
            boxShadow="lg"
            transition="0.3s"
            _hover={{ transform: "scale(1.02)", borderColor: "light_blue.a500" }}
          >
            <Flex
              justify="space-between"
              align="center"
              onClick={() => handleCategoryClick(category.name)}
              cursor="pointer"
            >
              <Text fontSize="xl" fontWeight="bold" color="light_blue.a700">
                {category.name}
              </Text>
              <Icon as={selectedCategory === category.name ? ChevronUpIcon : ChevronDownIcon} w={6} h={6} color="light_blue.a700" />
            </Flex>
            
            {/* Book List for Selected Category */}
            <Collapse in={selectedCategory === category.name} animateOpacity>
              <VStack align="start" mt="4" spacing="2">
                {category.books.map((book, index) => (
                  <Box
                    key={index}
                    bg="gray.50"
                    p="3"
                    w="full"
                    borderRadius="md"
                    _hover={{ bg: "gray.100" }}
                  >
                    <Text color="light_blue.a700" fontSize="md">
                      {book}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Collapse>
          </Box>
        ))}
      </SimpleGrid>
      </Box>
    </Box>
  );
}
