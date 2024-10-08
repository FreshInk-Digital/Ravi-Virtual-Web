import React, { useEffect, useState, Suspense } from "react";
import {
  Heading,
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import api from '../../api/api';
import DocumentViewer from "../../components/DocumentViewer";  // Ensure this handles preview
import PaginationComponent from "../../components/PaginationComponent";

const PublicationSection = () => {
  // eslint-disable-next-line
  const [publications, setPublications] = useState([]);
  const [sortedPublications, setSortedPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortCriteria, setSortCriteria] = useState('date');
  const [noPublications, setNoPublications] = useState(false);  // Track if there are no publications
  const publicationsPerPage = 12;

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await api.get('Publication/');
        if (response.data.length === 0) {
          setNoPublications(true);  // Set no publications flag if empty
        } else {
          setPublications(response.data);
          setTotalPages(Math.ceil(response.data.length / publicationsPerPage));
          sortPublications(response.data, sortCriteria);
          setNoPublications(false);  // Reset flag if there are publications
        }
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchPublications();
  }, [sortCriteria]);

  const handleDownload = (filePath) => {
    // If filePath already contains the full URL, no need to add the base URL again
    const isFullUrl = filePath.startsWith('http://') || filePath.startsWith('https://');
  
    // If it's a relative path, prepend the base URL
    const fullUrl = isFullUrl ? filePath : `https://ravi-virtual-web.onrender.com/${filePath}`;
  
    console.log(fullUrl);  // Log URL to verify correctness
  
    const link = document.createElement('a');
    link.href = fullUrl;
    link.setAttribute('download', filePath.split('/').pop());  // Set download attribute
    link.setAttribute('target', '_blank');  // Open in a new tab to avoid blocking
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  // Clean up after download
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const sortPublications = (data, criteria) => {
    let sortedData;
    if (criteria === 'date') {
      sortedData = [...data].sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
    } else if (criteria === 'name') {
      sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
    setSortedPublications(sortedData);
    setTotalPages(Math.ceil(sortedData.length / publicationsPerPage));
  };

  const currentPublications = sortedPublications.slice((currentPage - 1) * publicationsPerPage, currentPage * publicationsPerPage);

  // Determine if the screen is small
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt="24px" px={{ md: "50px", base: "20px" }}>
      <Box
        borderColor="blue_gray.50"
        borderWidth="1px"
        borderStyle="solid"
        bg="white.a700"
        boxShadow="xs"
        borderRadius="12px"
        overflow="hidden"
      >
        <Box
          borderColor="blue_gray.50"
          borderBottomWidth="0.5px"
          borderStyle="solid"
          bg="white.a700"
          px="20px"
          py="16px"
        >
          <Flex
            mb="20px"
            gap="16px"
            justifyContent="center"
            alignItems="start"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex
              mt="20px"
              gap="4px"
              flex={1}
              flexDirection="column"
              alignItems="start"
            >
              <Heading
                size="headingmd"
                as="h1"
                color="gray.900"
              >
                Browse through different resources under the company
              </Heading>
              <Text mt="4px">Lorem ipsum dolor sit amet consectetur.</Text>
            </Flex>
          </Flex>
          <Flex justifyContent="flex-end" mb="20px" px="20px">
            <Select
              placeholder="Sort By"
              onChange={handleSortChange}
              value={sortCriteria}
              maxW="200px"
            >
              <option value="date">Date Created</option>
              <option value="name">Alphabetically (A-Z)</option>
            </Select>
          </Flex>
        </Box>

        <Box p="20px">
          {noPublications ? (  // Display notification if no publications
            <Text color="red.500" textAlign="center">
              No publication documents available yet.
            </Text>
          ) : (
            <>
              {/* Make the table horizontally scrollable on small screens */}
              <Box overflowX="auto">
                <Table variant="simple" size={isSmallScreen ? "sm" : "md"}>
                  <Thead>
                    <Tr>
                      <Th fontSize={{ base: "sm", md: "md" }}>File Title</Th>
                      <Th fontSize={{ base: "sm", md: "md" }}>Description</Th>
                      <Th fontSize={{ base: "sm", md: "md" }}>Date Created</Th>
                      <Th fontSize={{ base: "sm", md: "md" }}>Preview</Th>
                      <Th fontSize={{ base: "sm", md: "md" }}>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Suspense fallback={<Tr><Td colSpan={5}><Spinner /></Td></Tr>}>
                      {currentPublications.map((pub) => (
                        <Tr key={pub.id}>
                          <Td fontSize={{ base: "sm", md: "md" }}>{pub.name}</Td>
                          <Td fontSize={{ base: "sm", md: "md" }}>{pub.description}</Td>
                          <Td fontSize={{ base: "sm", md: "md" }}>{new Date(pub.date_created).toLocaleDateString()}</Td>
                          <Td>
                            {pub.publication ? (
                              <DocumentViewer
                                fileType={pub.publication.split('.').pop().toUpperCase()} 
                                documentName={pub.name}
                                fileUrl={`https://ravi-virtual-web.onrender.com/${pub.publication}`}  // Correct path
                              />
                            ) : (
                              <Text color="red.500">No document available</Text>  // Fallback if undefined
                            )}
                          </Td>
                          <Td>
                            {pub.publication ? (
                              <Button
                                colorScheme="blue"
                                size={{ base: "sm", md: "md" }}
                                onClick={() => handleDownload(pub.publication)}
                              >
                                Download
                              </Button>
                            ) : (
                              <Button colorScheme="gray" size={{ base: "sm", md: "md" }} isDisabled>
                                Unavailable
                              </Button>
                            )}
                          </Td>
                        </Tr>
                      ))}
                    </Suspense>
                  </Tbody>
                </Table>
              </Box>

              {/* Pagination */}
              <Flex mt="20px" justifyContent="center">
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </Flex>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PublicationSection;
