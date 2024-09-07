import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic
      console.log("Form submitted:", { email, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Flex justify="center" align="center" minH="60vh" px="16px" py="40px">
      <Box w={{ base: "100%", md: "400px" }} bg="gray.50" p="24px" borderRadius="8px" boxShadow="md">
        <Heading as="h3" size="lg" mb="24px" textAlign="center" color="black.900">
          Login
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={errors.email} mb="16px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.password} mb="24px">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
          </FormControl>

          <Button type="submit" colorScheme="blue" w="100%" mb="16px">
            Login
          </Button>

          <Text textAlign="center" fontSize="sm" color="gray.600">
            Forgot your password? <Button variant="link" colorScheme="blue">Reset it here</Button>
          </Text>
        </form>
      </Box>
    </Flex>
  );
}
