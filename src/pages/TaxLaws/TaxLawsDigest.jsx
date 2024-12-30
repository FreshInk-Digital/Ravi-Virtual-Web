import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import {
  Box,
  Heading,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Collapse,
  Icon,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function TaxLawsDigest() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null); // State to track connection error
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories and books data from backend
    api
      .get("/book-categories/")
      .then((response) => {
        setCategoriesData(response.data);
        setError(null); // Reset error state on successful fetch
      })
      .catch((error) => {
        console.error("Failed to fetch categories", error);
        setError("Failed to connect to the server. Please try again later."); // Set error message on failure
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleBookClick = (book) => {

    // if (!book || !book.book) {
    //   console.error("Invalid book object:", book);
    //   return;
    // }
    if (book.sensitivity === "critical") {
      // Navigate to the PdfViewer for critical books
      navigate(`/pdf-viewer?file=${encodeURIComponent(book.book)}`);
      // console.log('The book is ',book.book)
      // alert("This is sensitive content!");
    } else {
      // Open the file directly
      window.open(book.book, "_blank");
    }
  };

  
  return (
    <Box mt="24px" px={{ md: "20px", base: "10px" }} fontFamily="Poppins">
      <Box
        maxW="1155px"
        margin="0 auto"
        borderColor="blue_gray.50"
        borderWidth="1px"
        borderStyle="solid"
        bg="white.a700"
        boxShadow="xs"
        borderRadius="12px"
        overflow="hidden"
        p="20px"
        fontFamily="Poppins"
      >
        {/* Heading */}
        <Heading size="lg" as="h1" color="gray.900" textAlign="start" fontFamily="Poppins">
          Explore Tax Laws
        </Heading>
        <Text mb="8" textAlign="start" color="gray.600" fontFamily="Poppins">
          Access the full text of the Tax Laws. Explore sections covering various acts, repealed laws, and more.
        </Text>

        {/* Display error message if there is a connection issue */}
        {error && (
          <Alert status="error" mb="8">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* Categories Grid */}
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing="10px">
          {categoriesData.map((category) => (
            <Box
              key={category.id}
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
                  {category.books.length > 0 ? (
                    category.books.map((book, index) => (
                      <Box
                        key={index}
                        bg="gray.50"
                        p="3"
                        w="full"
                        borderRadius="md"
                        _hover={{ bg: "gray.100" }}
                        onClick={() => handleBookClick(book)} // Handle book click
                        cursor="pointer"
                      >
                        <Text color="light_blue.a700" fontSize="md">
                          {book.name}
                        </Text>
                      </Box>
                    ))
                  ) : (
                    <Text color="gray.500" fontSize="md" fontStyle="italic">
                      No books uploaded yet.
                    </Text>
                  )}
                </VStack>
              </Collapse>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
