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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

// Data for linking sections
const linkingSections = [
  { number: 1, section: "3", reference: "Definition of the term assessment", linkedTo: "section 94" },
  { number: 2, section: "6", reference: "Definition of the term chargeable income", linkedTo: "section 6" },
  { number: 3, section: "64", reference: "Definition of the term charitable organization", linkedTo: "section 64" },
  { number: 4, section: "Third Schedule", reference: "Definition of the term class depreciable asset", linkedTo: "paragraph 1 of the Third Schedule" },
  { number: 5, section: "11", reference: "Definition of the term consumption expenditure", linkedTo: "section 11" },
  { number: 6, section: "37", reference: "Definition of the term cost of an asset", linkedTo: "section 37" },
  { number: 7, section: "debt claim", reference: "Definition of the term debt obligation", linkedTo: "Definition of the term debt claim" },
  { number: 8, section: "Third Schedule", reference: "Definition of the term depreciation basis", linkedTo: "paragraph 3 of the Third Schedule" },
  { number: 9, section: "75", reference: "Definition of the term distribution", linkedTo: "section 75" },
  { number: 10, section: "10", reference: "Definition of the term exempt amount", linkedTo: "section 10" },
  // Add more rows as needed
];

export default function IncomeTaxActContent() {
  const [selectedProvision, setSelectedProvision] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = (provision) => {
    setSelectedProvision(provision);
    onOpen();
  };

  return (
    <Box mt="24px" px={{ md: "50px", base: "20px" }} fontFamily="Poppins">
      <Heading size="lg" mb="4" textAlign="center" color="gray.800" fontFamily="Poppins">
        Income Tax Act
      </Heading>
      <Text mb="8" textAlign="center" color="gray.600" fontFamily="Poppins">
        Explore the updated provisions and regulations governing income tax.
      </Text>

      {/* Table for Linking Provisions */}
      <Box overflowX="auto" mt="8">
        <Table variant="striped" >
          <Thead>
            <Tr>
              <Th fontFamily="Poppins">S. No.</Th>
              <Th fontFamily="Poppins">Section</Th>
              <Th fontFamily="Poppins">Reference</Th>
              <Th fontFamily="Poppins">Linked To</Th>
            </Tr>
          </Thead>
          <Tbody>
            {linkingSections.map((section, index) => (
              <Tr key={index}>
                <Td fontFamily="Poppins">{section.number}</Td>
                <Td fontFamily="Poppins">{section.section}</Td>
                <Td fontFamily="Poppins">{section.reference}</Td>
                <Td>
                  <Link color="blue.500" fontFamily="Poppins" onClick={() => handleLinkClick(section)}>
                    {section.linkedTo}
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal for displaying provision details */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" fontFamily="Poppins">
          <ModalHeader fontFamily="Poppins">Provision Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily="Poppins">
            <Text>Section: {selectedProvision?.section}</Text>
            <Text>Reference: {selectedProvision?.reference}</Text>
            <Text>Linked To: {selectedProvision?.linkedTo}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
