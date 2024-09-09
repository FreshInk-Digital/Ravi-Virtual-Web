import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Text, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import api from "api/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "constants/constants";

function LoginSection({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState(""); // New state for alert messages
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "";

  const validateUsername = (username) => {
    return username.length > 0;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    } else if (!validateUsername(username)) {
      validationErrors.username = "Invalid username";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 4) {
      validationErrors.password = "Password must be at least 4 characters";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Clear previous alert messages
      setAlertMessage("");

      try {
        const res = await api.post(route, { username, password });

        if (method === "login") {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          navigate("/admin-dashboard");
        } else {
          navigate("/login");
        }
      } catch (error) {
        if (error.response) {
          console.log("Error Status:", error.response.status);
          console.log("Error Data:", error.response.data);
        } else {
          console.log("Error", error.message);
        }
        setAlertMessage("Failed to login: " + (error.response?.data?.detail || error.message));
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
      setAlertMessage(""); // Clear previous alert messages if validation errors exist
    }
  };

  return (
    <Flex justify="center" align="center" minH="60vh" px="16px" py="40px">
      <Box w={{ base: "100%", md: "400px" }} bg="gray.50" p="24px" borderRadius="8px" boxShadow="md">
        <Heading as="h3" size="lg" mb="24px" textAlign="center" color="black.900">
          {name}
        </Heading>

        {alertMessage && (
          <Alert status="error" mb="16px">
            <AlertIcon />
            {alertMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={errors.username} mb="16px">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
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

export default LoginSection;
