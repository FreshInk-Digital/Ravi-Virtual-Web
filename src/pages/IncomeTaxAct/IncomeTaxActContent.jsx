import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const sections = [
  {
    title: "Preliminary",
    description: "Short Title, Application, and Interpretation",
  },
  { title: "Imposition of Income Tax", description: "Charge of Tax" },
  {
    title: "Income Tax Base",
    description: "Calculating the Income Tax Base",
  },
  {
    title: "Special Industries",
    description: "Insurance Business, Retirement Savings, Charitable Organisations",
  },
  {
    title: "International",
    description: "Residence and Source, Permanent Establishments, Foreign Tax Relief",
  },
  // Add more sections as needed
];

const taxRates = [
  { category: "Individuals", rate: "30%" },
  { category: "Corporations", rate: "25%" },
  { category: "Withholding Tax", rate: "15%" },
  // Add more rows as needed
];

export default function IncomeTaxActContent() {
  return (
    <Box mt="24px" px={{ md: "50px", base: "20px" }}>
      <Heading size="lg" mb="4" textAlign="center" color="gray.800">
        Income Tax Act 2024
      </Heading>
      <Text mb="8" textAlign="center" color="gray.600">
        Explore the updated provisions and regulations governing income tax in 2024.
      </Text>

      {/* Act Sections - Using Accordion for collapsible effect */}
      <Accordion allowToggle>
        {sections.map((section, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md">{section.title}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>{section.description}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Example Table for Tax Rates */}
      <Box mt="8">
        <Heading size="md" mb="4">
          Tax Rates
        </Heading>
        <Box overflowX="auto">
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {taxRates.map((rate, index) => (
                <Tr key={index}>
                  <Td>{rate.category}</Td>
                  <Td>{rate.rate}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
