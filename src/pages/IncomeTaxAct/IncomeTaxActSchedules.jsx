import React, { useEffect } from 'react';
import { 
  Box,
  Text,
  Divider
} from "@chakra-ui/react";

const IncomeTaxActSchedules = () => {
  
  useEffect(() => {
    // Disable copy and paste functionality
    const handleCopy = (e) => {
      e.preventDefault();
    };

    const handlePaste = (e) => {
      e.preventDefault();
    };

    // Attach event listeners
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <Box>
      {/* Schedules Heading */}
      <Text fontWeight="bold" fontSize="lg" mt="48px" mb="4" textAlign="center" color="gray.800">
        SCHEDULES
      </Text>
      
      {/* Divider */}
      <Divider
        mb="10px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* First Schedule */}
      <Text fontSize="lg" mt="6" textAlign="center" color="gray.800" textTransform="uppercase">
        FIRST SCHEDULE
      </Text>
      <Text fontSize="md" mt="2" color="gray.600" textAlign="center" textTransform="uppercase">
        Tax Rates
      </Text>
      <Text mt="2">1. Rates of Income Tax for Individuals.</Text>
      <Text mt="2">2. Presumptive Income Tax for Individuals.</Text>
      <Text mt="2">3. Rates of Income Tax for Entities.</Text>
      <Text mt="2">4. Rates of Withholding Tax.</Text>
      <Text mt="2">5. Change of Rate.</Text>

      {/* Divider between schedules */}
      <Divider
        mt="24px"
        mb="24px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* Second Schedule */}
      <Text fontSize="lg" textAlign="center" color="gray.800" textTransform="uppercase">
        SECOND SCHEDULE
      </Text>
      <Text fontSize="md" mt="2" color="gray.600" textAlign="center" textTransform="uppercase">
        Exempt Amounts
      </Text>

      {/* Divider between schedules */}
      <Divider
        mt="24px"
        mb="24px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* Third Schedule */}
      <Text fontSize="lg" textAlign="center" color="gray.800" textTransform="uppercase">
        THIRD SCHEDULE
      </Text>
      <Text fontSize="md" mt="2" color="gray.600" textAlign="center" textTransform="uppercase">
        Depreciable Assets, Allowances, and Inclusions
      </Text>
      <Text mt="2">1. Classification and Pooling of Depreciable Assets.</Text>
      <Text mt="2">2. Depreciation Allowance.</Text>
      <Text mt="2">3. Realisation of Depreciable Assets.</Text>

      {/* Divider between schedules */}
      <Divider
        mt="24px"
        mb="24px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* Fourth Schedule */}
      <Text fontSize="lg" textAlign="center" color="gray.800" textTransform="uppercase">
        FOURTH SCHEDULE
      </Text>
      <Text fontSize="md" mt="2" color="gray.600" textAlign="center" textTransform="uppercase">
        Transaction for Which Taxpayer Identification Number is Required
      </Text>

      {/* Divider between schedules */}
      <Divider
        mt="24px"
        mb="24px"
        borderColor="gray.800"
        borderWidth="1px"
        w="20%"
        mx="auto"
      />

      {/* Fifth Schedule */}
      <Text fontSize="lg" textAlign="center" color="gray.800" textTransform="uppercase">
        FIFTH SCHEDULE
      </Text>
      <Text fontSize="md" mt="2" color="gray.600" textAlign="center" textTransform="uppercase">
        Quantification of Motor Vehicle Benefits
      </Text>

    </Box>
  );
};

export default IncomeTaxActSchedules;
