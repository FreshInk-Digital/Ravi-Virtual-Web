import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Select,
  Button,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const taxLawsData = [
  { number: 1, title: "INCOME TAX ACT", date: "01 July 2024", link: "/income-tax-act" },
  // Add more rows as needed
];

export default function LinkedTaxLaws() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const filteredLaws = taxLawsData.filter((law) =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLinkClick = (link) => {
    navigate(link);
  };

  return (
    <Box mt="24px" px={{ md: "20px", base: "10px" }} fontFamily="Poppins">
      <Box
        maxW="1155px"  // Center the content with a maximum width
        margin="0 auto"  // Apply margin to center it on the page
        borderColor="blue_gray.50"
        borderWidth="1px"
        borderStyle="solid"
        bg="white.a700"
        boxShadow="xs"
        borderRadius="12px"
        overflow="hidden"
        p="20px"  // Add padding for internal spacing
        fontFamily="Poppins"
      >
        {/* Heading */}
        <Heading size="lg" as="h1" color="gray.900" textAlign="start" fontFamily="Poppins">
          Linked Tax Laws
        </Heading>
        <Text mb="8" textAlign="start" color="gray.600" fontFamily="Poppins">
          Explore sections covering various acts, repealed laws, and more.
        </Text>

        {/* Search and Filter Options */}
        <Box display="flex" justifyContent="space-between" mb="4" fontFamily="Poppins">
          <InputGroup>
            <Input
              placeholder="Title Filter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              w={{ base: "100%", md: "300px" }}
              fontFamily="Poppins"
            />
          </InputGroup>
          
          <Select
            w={{ base: "100%", md: "100px" }}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            fontFamily="Poppins"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Select>
        </Box>

        {/* Table for Tax Laws */}
        <Box overflowX="auto" fontFamily="Poppins">
          <Table variant="striped" fontFamily="Poppins">
            <Thead>
              <Tr>
                <Th fontFamily="Poppins">S. No.</Th>
                <Th fontFamily="Poppins">Title</Th>
                <Th fontFamily="Poppins">Created Date</Th>
                <Th fontFamily="Poppins">Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredLaws.slice(0, itemsPerPage).map((law, index) => (
                <Tr key={index}>
                  <Td fontFamily="Poppins">{law.number}</Td>
                  <Td fontFamily="Poppins">{law.title}</Td>
                  <Td fontFamily="Poppins">{law.date}</Td>
                  <Td>
                    <Link color="blue.500" onClick={() => handleLinkClick(law.link)} fontFamily="Poppins">
                      View
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Pagination or Load More Button */}
        {filteredLaws.length > itemsPerPage && (
          <Box mt="4" textAlign="center" fontFamily="Poppins">
            <Button colorScheme="blue" onClick={() => setItemsPerPage(itemsPerPage + 5)} fontFamily="Poppins">
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
