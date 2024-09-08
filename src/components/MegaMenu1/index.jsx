import { Box, Text, Link, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function MegaMenu1() {
  const menuItems = [
    {
      title: "Income Tax",
      description: "Measure active usage and target areas of improvement.",
      link: "#",
      logo: "/images/income_tax_logo.svg",
    },
    {
      title: "Excise Act",
      description: "Find retention drivers and make your customers smile.",
      link: "#",
      logo: "/images/excise_act_logo.svg",
    },
    {
      title: "Value Added Tax",
      description: "Measure active usage and target areas of improvement.",
      link: "#",
      logo: "/images/vat_logo.svg",
    },
    {
      title: "Tax Administration Act",
      description: "The latest industry news, updates and info.",
      link: "#",
      logo: "/images/tax_admin_act_logo.svg",
    },
    {
      title: "Vocational Education & Training Act",
      description: "Learn how our customers are making big changes.",
      link: "#",
      logo: "/images/tax_admin_act_logo.svg",
    },
    {
      title: "Tax Revenue Appeal Act",
      description: "Get up and running on new features and techniques.",
      link: "#",
      logo: "/images/tax_admin_act_logo.svg",
    },
    {
      title: "Finance Act",
      description: "Learn about our story and our mission statement.",
      link: "#",
      logo: "/images/tax_admin_act_logo.svg",
    },
    {
      title: "Written Law",
      description: "News and writings, press releases, and press resources.",
      link: "#",
      logo: "/images/written_law_logo.svg",
    },
  ];

  return (
    <Box
      bg="white"
      boxShadow="lg"
      p="20px"
      borderRadius="8px"
      zIndex="1000"
      position="absolute"
      top="100%"
      left="0"
      width="100%"
      maxWidth="1200px"  // Adjusted maxWidth
      border="1px solid"
      borderColor="gray.200"
      overflowY="auto"  // Ensure content scrolls if too large
      maxHeight="500px"  // Limit dropdown height
      sx={{
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
      }}
    >
      <Flex
        wrap="wrap"
        justifyContent="space-between"
        gap="20px"
        direction={{ base: "column", md: "row" }}  // Flex-based layout
      >
        {menuItems.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            alignItems="flex-start"
            gap="8px"
            width={{ base: "100%", md: "22%" }}  // Adjust width for better layout
            mb="20px"
          >
            <Image src={item.logo} alt={`${item.title} logo`} boxSize="40px" />
            <Text fontWeight="700" fontSize={{ base: "16px", md: "18px" }} color="black.900">
              {item.title}
            </Text>
            <Text fontSize="14px" color="black.600">
              {item.description}
            </Text>
            <Link href={item.link} color="blue.500" fontWeight="500">
              Learn more
            </Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
