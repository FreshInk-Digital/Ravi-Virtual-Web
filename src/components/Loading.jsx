// components/Loading.jsx
import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      zIndex="1000"
    >
      <Box textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
    </Box>
  );
};

export default Loading;
