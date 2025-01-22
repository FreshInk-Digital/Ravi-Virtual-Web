import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export default function CaseDetails() {
  const { id } = useParams();
  const [caseDetails, setCaseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch case details using the ID
    api
      .get(`/Cases/${id}/`)
      .then((response) => {
        setCaseDetails(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Failed to fetch case details", error);
        setError("Failed to load case details. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  // console.log caseDetails

  if (isLoading) {
    return <Spinner size="lg" mt="10" color="blue.500" />;
  }

  if (error) {
    return (
      <Alert status="error" mt="10">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

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
      >
        <Heading size="lg" as="h1" color="gray.900" mb="4">
          Case Details
        </Heading>
        <Text><strong>Case Number:</strong> {caseDetails.case_number}</Text>
        <Text><strong>Plaintiff:</strong> {caseDetails.plaintiff}</Text>
        <Text><strong>Defendant:</strong> {caseDetails.defendant}</Text>
        <Text><strong>Category:</strong> {caseDetails.tax_category}</Text>
        <Text><strong>Description:</strong> {caseDetails.description}</Text>
        <Text><strong>Date Filed:</strong> {caseDetails.date_filed}</Text>
        {/* Add other fields as needed */}
      </Box>
    </Box>
  );
}
