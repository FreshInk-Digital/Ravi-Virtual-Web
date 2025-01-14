import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
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
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons"
export default function TaxJudgmentsPanel() {
  const [casesData, setCasesData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cases data from the backend
    api
      .get("/Cases/")
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
    navigate(`/pdf-viewer?file=${encodeURIComponent(caseItem.file_path)}`);
  };

  // Filter cases based on the search term
  const filteredCases = casesData.filter((caseItem) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      caseItem.case_number.toLowerCase().includes(lowerCaseTerm) ||
      (caseItem.registry && caseItem.registry.toLowerCase().includes(lowerCaseTerm)) ||
      caseItem.plaintiff.toLowerCase().includes(lowerCaseTerm) ||
      caseItem.defendant.toLowerCase().includes(lowerCaseTerm)
    );
  });

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
          Tax Judgments Panel
        </Heading>

        {/* Single Search Bar */}
        <Box mt="8">
          <InputGroup>
            <Input
              placeholder="Search Case"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="4px"
              width="25%"
              height = "50px"
            />
            <InputRightElement>
                {searchTerm?.length > 0 ? (
                  <CloseIcon onClick={() => setSearchTerm("")} />
                ) : (
                  <Image src="images/img_search.svg" alt="Search" h="20px" w="20px" />
                )}
              </InputRightElement>
          </InputGroup>
        </Box>

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
                  <Th>Case Number</Th>
                  <Th>Registry</Th>
                  <Th>Plaintiff</Th>
                  <Th>Defendant</Th>
                  <Th>Date Created</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCases.map((caseItem, index) => (
                  <Tr key={index} onClick={() => handleRowClick(caseItem)}>
                    <Td>{caseItem.case_number}</Td>
                    <Td>{caseItem.registry}</Td>
                    <Td>{caseItem.plaintiff}</Td>
                    <Td>{caseItem.defendant}</Td>
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
