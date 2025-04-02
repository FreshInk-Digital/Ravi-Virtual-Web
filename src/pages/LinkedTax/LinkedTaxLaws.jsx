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
  Text,
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

  const casesPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCases.length / casesPerPage);

  // Get current cases to display
  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);

  useEffect(() => {
    // Fetch cases data from the backend
    api
      .get("/Cases/")
      .then((response) => {
        const sortedCases = response.data.sort((a, b) =>
          b.case_code.localeCompare(a.case_code)
        ); // Sort in descending order
        setCasesData(sortedCases);
        setFilteredCases(sortedCases); // Initialize filtered cases with sorted data
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

  const handleRowClick = (caseItem, event) => {
    // Prevent opening the modal if the click is on the "View Case" link
    if (event.target.tagName === "A") {
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
      filtered = filtered.filter(
        (caseItem) => caseItem.court === selectedCategory
      );
    }

    // Apply search filter
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((caseItem) => {
        const caseNumber = caseItem.case_number || "";
        const registry = caseItem.registry || "";
        const appellant = caseItem.appellant || "";
        const respondent = caseItem.respondent || "";

        return (
          caseNumber.toLowerCase().includes(lowerCaseTerm) ||
          registry.toLowerCase().includes(lowerCaseTerm) ||
          appellant.toLowerCase().includes(lowerCaseTerm) ||
          respondent.toLowerCase().includes(lowerCaseTerm)
        );
      });
    }

    setFilteredCases(filtered);
  }, [casesData, selectedCategory, searchTerm]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleViewCase = (filePath) => {
    if (filePath) {
      window.open(filePath, "_blank"); // Opens the file in a new tab
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
                maxHeight="200px" // Enable scrolling
                overflowY="auto" // Enable scrolling
              >
                {[
                  { value: "TRAB", label: "TRAB" },
                  { value: "TRAT", label: "TRAT" },
                  { value: "CAT", label: "CAT" },
                  { value: "HCT", label: "HCT" },
                  {
                    value: "UGANDA SUPREME COURT",
                    label: "UGANDA SUPREME COURT",
                  },
                  {
                    value: "KENYA SUPREME COURT",
                    label: "KENYA SUPREME COURT",
                  },
                  { value: "UK SUPREME COURT", label: "UK SUPREME COURT" },
                  {
                    value: "INDIA SUPREME COURT",
                    label: "INDIA SUPREME COURT",
                  },
                  {
                    value: "AUSTRALIA SUPREME COURT",
                    label: "AUSTRALIA SUPREME COURT",
                  },
                ].map((category) => (
                  <Box
                    key={category.value}
                    px="4"
                    py="2"
                    cursor="pointer"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setDropdownVisible(false);
                    }}
                  >
                    {category.label}
                  </Box>
                ))}
                <Box
                  px="4"
                  py="2"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setDropdownVisible(false);
                  }}
                >
                  ALL COURTS
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
                  <Th>Case Code</Th>
                  <Th>Case Number</Th>
                  <Th>Appellant</Th>
                  <Th>Respondent</Th>
                  <Th>Court</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentCases.map((caseItem, index) => (
                  <Tr
                    key={index}
                    onClick={(event) => handleRowClick(caseItem, event)}
                  >
                    <Td>
                      {caseItem.appellant} Vs {caseItem.respondent}
                    </Td>
                    <Td>{caseItem.case_code}</Td>
                    <Td>{caseItem.case_number}</Td>
                    <Td>{caseItem.appellant}</Td>
                    <Td>{caseItem.respondent}</Td>
                    <Td>{caseItem.court}</Td>
                    <Td>
                      <a
                        href={caseItem.file_path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Case
                      </a>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Pagination Controls */}
            <Flex justify="center" mt="4" gap="4">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                isDisabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                isDisabled={currentPage === totalPages}
              >
                Next
              </Button>
            </Flex>
          </Box>
        )}
      </Box>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent bg="white" p="6" boxShadow="2xl" borderRadius="12px">
          <ModalHeader textAlign="center" position="relative" pt="8">
            <ModalCloseButton position="absolute" right="4" top="4" />
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="light_blue.a700"
              mt="4"
            >
              {selectedCase?.appellant} Vs {selectedCase?.respondent}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Stack spacing="4" fontSize="md" fontFamily="Poppins">
              <Box>
                <strong>Case Code:</strong> {selectedCase?.case_code}
              </Box>
              <Box>
                <strong>Case Number:</strong> {selectedCase?.case_number}
              </Box>
              <Box>
                <strong>Appellant:</strong> {selectedCase?.appellant}
              </Box>
              <Box>
                <strong>Respondent:</strong> {selectedCase?.respondent}
              </Box>
              <Box>
                <strong>Year:</strong> {selectedCase?.year}
              </Box>
              <Box>
                <strong>Court:</strong> {selectedCase?.court}
              </Box>
              <Box>
                <strong>Description:</strong> {selectedCase?.description}
              </Box>
              <Button
                mt="4"
                colorScheme="blue"
                onClick={() => handleViewCase(fileUrl)}
                size="lg"
                width="100%"
              >
                Download/View
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={closeModal}
              size="lg"
              fontFamily="Poppins"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
