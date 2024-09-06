import React from "react";
import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box
        textAlign="center"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        bg="white"
        boxShadow="md"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Oops! Page Not Found
        </Heading>
        <Text fontSize="lg" mb={6}>
          The page you are looking for does not exist or has been moved.
        </Text>
        <Link to="/">
          <Button colorScheme="blue" size="lg">
            Go to Home
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default NotFound;
