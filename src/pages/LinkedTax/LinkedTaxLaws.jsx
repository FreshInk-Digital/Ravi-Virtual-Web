import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
  Spinner,
  InputRightElement,
  InputGroup,
  Input,
  Image
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function LinkedTax() {
  const [casesData, setCasesData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBarValue, setSearchBarValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cases data from the backend
    api.get('/Cases/')
      .then((response) => {
        setCasesData(response.data);
        setError(null); // Reset error state on successful fetch
      })
      .catch((error) => {
        console.error("Failed to fetch cases", error);
        setError("Failed to connect to the server. Please try again later."); // Set error message on failure
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleRowClick = (caseItem) => {
    if (!caseItem) {
      console.error("Invalid case object:", caseItem);
      return;
    }
    console.log('Selected case file path:', caseItem.file_path); // Log the file path
    navigate(`/pdf-viewer?file=${encodeURIComponent(caseItem.file_path)}`);
  };

  // Filter cases based on search input
  const filteredCases = casesData.filter((caseItem) =>
    caseItem.name.toLowerCase().includes(searchBarValue.toLowerCase())
  );

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
        <Heading size="lg" as="h1" color="gray.900" textAlign="start">
          Explore Tax Cases
        </Heading>

        {/* Search bar positioned more to the left */}
        <InputGroup w={{ md: "24%", base: "100%" }} size="xs" mt="4">
          <Input
            placeholder={`Search Case`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            color="light_blue.a700_7f"
            fontFamily="Poppins"
            borderRadius="4px"
          />
          <InputRightElement>
            {searchBarValue?.length > 0 ? (
              <CloseIcon onClick={() => setSearchBarValue("")} cursor="pointer" />
            ) : (
              <Image src="images/img_search.svg" alt="Search" h="20px" w="20px" />
            )}
          </InputRightElement>
        </InputGroup>

        {isLoading ? (
          <Spinner size="lg" mt="10" color="blue.500" />
        ) : error ? (
          <Alert status="error" mt="10">
            <AlertIcon />
            {error}
          </Alert>
        ) : (
          <Box mt="10" overflowX="auto">
            <Table variant="striped" cursor="pointer">
              <Thead>
                <Tr>
                  <Th>Case Name</Th>
                  <Th>Case Description</Th>
                  <Th>Date Created</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCases.map((caseItem, index) => (
                  <Tr key={index} onClick={() => handleRowClick(caseItem)}>
                    <Td>{caseItem.name}</Td>
                    <Td>{caseItem.description}</Td>
                    <Td>{new Date(caseItem.date_created).toLocaleDateString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
    </Box>
  );
}
