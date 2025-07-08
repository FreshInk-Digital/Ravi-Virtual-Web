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
  Spinner,
} from "@chakra-ui/react";
import api from '../../api/api';
import DocumentViewer from "../../components/DocumentViewer";
import PaginationComponent from "../../components/PaginationComponent";

const PublicationSection = () => {
  // eslint-disable-next-line
  const [publications, setPublications] = useState([]);
  const [sortedPublications, setSortedPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortCriteria, setSortCriteria] = useState('date');
  const [noPublications, setNoPublications] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ NEW
  const publicationsPerPage = 12;

  useEffect(() => {
    const fetchPublications = async () => {
      setIsLoading(true); // ✅ Start loading
      try {
        const response = await api.get('Publication/');
        if (response.data.length === 0) {
          setNoPublications(true);
        } else {
          setPublications(response.data);
          setTotalPages(Math.ceil(response.data.length / publicationsPerPage));
          sortPublications(response.data, sortCriteria);
          setNoPublications(false);
          setConnectionError(false);
        }
      } catch (error) {
        console.error('Error fetching publications:', error);
        setConnectionError(true);
      } finally {
        setIsLoading(false); // ✅ Stop loading
      }
    };

    fetchPublications();
  }, [sortCriteria]);

  const handleDownload = (filePath) => {
    const isFullUrl = filePath.startsWith('http://') || filePath.startsWith('https://');
    const fullUrl = isFullUrl ? filePath : `https://backend.ravimoova.co.tz/${filePath}`;

    const link = document.createElement('a');
    link.href = fullUrl;
    link.setAttribute('download', filePath.split('/').pop());
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const currentPublications = sortedPublications.slice(
    (currentPage - 1) * publicationsPerPage,
    currentPage * publicationsPerPage
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
        fontFamily="Poppins"
        p="20px"
      >
        <Box
          borderColor="blue_gray.50"
          borderBottomWidth="0.5px"
          borderStyle="solid"
          bg="white.a700"
          px="20px"
          py="16px"
          fontFamily="Poppins"
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
              <Heading size="lg" as="h1" color="gray.900">
                Browse through different resources under the company
              </Heading>
              <Text mt="4px">
                Explore our publications to discover a wide range of resources.
              </Text>
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
          {isLoading ? (
            <Flex justify="center" align="center" minH="200px">
              <Spinner size="lg" color="blue.500" />
            </Flex>
          ) : connectionError ? (
            <Text color="red.500" textAlign="center">
              Unable to connect to the server. Please try again later.
            </Text>
          ) : noPublications ? (
            <Text color="red.500" textAlign="center">
              No publication documents available yet.
            </Text>
          ) : (
            <>
              <Box overflowX="auto">
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th>File Title</Th>
                      <Th>Description</Th>
                      <Th>Date Created</Th>
                      <Th>Preview</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Suspense fallback={<Tr><Td colSpan={5}><Spinner /></Td></Tr>}>
                      {currentPublications.map((pub) => (
                        <Tr key={pub.id}>
                          <Td>{pub.name}</Td>
                          <Td>{pub.description}</Td>
                          <Td>{new Date(pub.date_created).toLocaleDateString()}</Td>
                          <Td>
                            {pub.publication ? (
                              <DocumentViewer
                                fileType={pub.publication.split('.').pop().toUpperCase()}
                                documentName={pub.name}
                                fileUrl={`https://backend.ravimoova.co.tz/${pub.publication}`}
                              />
                            ) : (
                              <Text color="red.500">No document available</Text>
                            )}
                          </Td>
                          <Td>
                            {pub.publication ? (
                              <Button
                                colorScheme="light_blue.a700"
                                size="sm"
                                onClick={() => handleDownload(pub.publication)}
                              >
                                Download
                              </Button>
                            ) : (
                              <Button colorScheme="gray" size="sm" isDisabled>
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
