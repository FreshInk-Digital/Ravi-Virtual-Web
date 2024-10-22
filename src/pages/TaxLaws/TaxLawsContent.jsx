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
import { useNavigate } from "react-router-dom"; // Correct hook for React Router v6

// Data for linking sections
const taxLawsData = [
  { number: 1, title: "INCOME TAX ACT", date: "01 July 2024", link: "/income-tax-act" },
  { number: 2, title: "ARCHITECTS AND QUANTITY SURVEYORS (REGISTRATION) ACT", date: "01 August 1997", link: "/statutes/repealed-acts/426-the-architects-and-quantity-surveyors-registration-act" },
  { number: 3, title: "AUDIO-VISUAL INSTITUTE OF DAR-ES-SALAAM ACT", date: "01 July 1975", link: "/statutes/repealed-acts/427-the-audio-visual-institute-of-dar-es-salaam-act" },
  { number: 4, title: "BANK OF TANZANIA ACT", date: "01 January 1970", link: "/statutes/repealed-acts/428-the-bank-of-tanzania-act" },
  { number: 5, title: "BANKING AND FINANCIAL INSTITUTIONS ACT", date: "18 October 1991", link: "/statutes/repealed-acts/429-the-banking-and-financial-institutions-act" },
  { number: 6, title: "DAIRY INDUSTRY ACT", date: "04 February 1966", link: "/statutes/repealed-acts/430-the-dairy-industry-act" },
  // Add more rows as needed
];

export default function TaxLawsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  const filteredLaws = taxLawsData.filter((law) =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLinkClick = (link) => {
    navigate(link); // Use navigate instead of history.push
  };

  return (
    <Box mt="24px" px={{ md: "50px", base: "20px" }} fontFamily="Poppins">
      <Heading size="lg" as="h1" color="gray.900" textAlign="start" fontFamily="Poppins">
        Tax Laws
      </Heading>
      <Text mb="8" textAlign="start" color="gray.600" fontFamily="Poppins">
        Access the full text of the Tax Laws. Explore sections covering various acts, repealed laws, and more.
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

      {/* Pagination Placeholder - You can implement pagination as needed */}
      {filteredLaws.length > itemsPerPage && (
        <Box mt="4" textAlign="center" fontFamily="Poppins">
          <Button colorScheme="blue" onClick={() => setItemsPerPage(itemsPerPage + 5)} fontFamily="Poppins">
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
