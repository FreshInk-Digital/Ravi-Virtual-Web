import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import {
  Flex,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function TaxJudgmentsPanel() {
  const [casesData, setCasesData] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null); // For the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [fileUrl, setFileUrl] = useState(""); // State for the file URL

  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    // Fetch cases data from the backend
    api
      .get("/Cases/")
      .then((response) => {
        setCasesData(response.data);
        setFilteredCases(response.data); // Initialize filtered cases with all data
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

    setSelectedCase(caseItem); // Set the selected case for the modal
    setFileUrl(caseItem.file_path); // Set the file URL from the case
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCase(null); // Clear selected case
    setFileUrl(""); // Clear the file URL
  };

  // Filter cases by category and search term
  useEffect(() => {
    let filtered = casesData;

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter((caseItem) => caseItem.tax_category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (caseItem) =>
          caseItem.case_number.toLowerCase().includes(lowerCaseTerm) ||
          (caseItem.registry && caseItem.registry.toLowerCase().includes(lowerCaseTerm)) ||
          caseItem.plaintiff.toLowerCase().includes(lowerCaseTerm) ||
          caseItem.defendant.toLowerCase().includes(lowerCaseTerm)
      );
    }

    setFilteredCases(filtered);
  }, [casesData, selectedCategory, searchTerm]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleViewCase = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank'); // Opens the file in a new tab
    }
  };

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // Add event listener for click events
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        {/* Search and Sort */}
        <Flex align="center" justify="space-between" mt="4" mb="4">
          <InputGroup>
            <Input
              placeholder="Search Case"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="4px"
              width="300px"
              height="50px"
            />
          </InputGroup>

          {/* Sort by Case Category */}
          <Flex align="center" gap="2" position="relative">
            {/* Toggler Icon */}
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            />

            {/* Dropdown Options */}
            {dropdownVisible && (
              <Box
                ref={dropdownRef}
                position="absolute"
                top="100%"
                right="0"
                zIndex="10"
                bg="white"
                borderRadius="4px"
                boxShadow="md"
                border="1px solid gray"
                py="2"
                width="200px"
              >
                <Box
                  px="4"
                  py="2"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    setSelectedCategory("TRAB");
                    setDropdownVisible(false); // Close dropdown after selection
                  }}
                >
                  TRAB
                </Box>
                <Box
                  px="4"
                  py="2"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    setSelectedCategory("TRAT");
                    setDropdownVisible(false); // Close dropdown after selection
                  }}
                >
                  TRAT
                </Box>
                <Box
                  px="4"
                  py="2"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    setSelectedCategory("CAT");
                    setDropdownVisible(false); // Close dropdown after selection
                  }}
                >
                  CAT
                </Box>
                <Box
                  px="4"
                  py="2"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setDropdownVisible(false); // Close dropdown after selection
                  }}
                >
                  All Categories
                </Box>
              </Box>
            )}
          </Flex>
        </Flex>

        {/* Loading, Error, or Table */}
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
                    <Th>Case Number</Th>
                    <Th>Plaintiff</Th>
                    <Th>Defendant</Th>
                    <Th>Category</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredCases.map((caseItem, index) => (
                    <Tr key={index} onClick={() => handleRowClick(caseItem)}>
                      <Td>
                        {caseItem.case_number} {caseItem.plaintiff} Vs {caseItem.defendant}
                      </Td>
                      <Td>{caseItem.case_number}</Td>
                      <Td>{caseItem.plaintiff}</Td>
                      <Td>{caseItem.defendant}</Td>
                      <Td>{caseItem.tax_category}</Td>
                      <Td>
                        {caseItem.file_path && (  // Assuming the file URL is under 'file_path' for each caseItem
                          <Button onClick={() => handleViewCase(caseItem.file_path)} colorScheme="teal" width="90px" height="30px">
                            View Case
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

          </Box>
        )}
      </Box>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent bg="white" p="3" boxShadow="lg">
          <ModalHeader>Case Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCase && (
              <Box>
                <Stack spacing={4}>
                  <p><strong>Case Number:</strong> {selectedCase.case_number}</p>
                  <p><strong>Plaintiff:</strong> {selectedCase.plaintiff}</p>
                  <p><strong>Defendant:</strong> {selectedCase.defendant}</p>
                  <p><strong>Tax Category:</strong> {selectedCase.tax_category}</p>
                  <p><strong>Registry:</strong> {selectedCase.registry}</p>
                  <p><strong>Description:</strong> {selectedCase.description}</p>
                  {/* <p><strong>Date Filed:</strong> {selectedCase.date_filed}</p> */}
                </Stack>
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
  <Flex width="100%" justifyContent="space-between" alignItems="center">
    {fileUrl && (
      <Button onClick={handleViewCase} colorScheme="teal">
        View Case
      </Button>
    )}
    <Button onClick={closeModal} colorScheme="blue">
      Close
    </Button>
  </Flex>
</ModalFooter>

        </ModalContent>
      </Modal>

    </Box>
  );
}
