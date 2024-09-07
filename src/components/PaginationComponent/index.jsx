import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing="4" mt="4" align="center">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        colorScheme="blue"
      >
        Previous
      </Button>

      <HStack spacing="2">
        {totalPages > 0 && (
          <Text fontSize="md">
            Page {currentPage} of {totalPages}
          </Text>
        )}
      </HStack>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        colorScheme="blue"
      >
        Next
      </Button>
    </HStack>
  );
};

export default PaginationComponent;
