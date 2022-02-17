import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Pagination({ page, setPage }) {
  return (
    <Flex gap={'20px'} my="10px" alignItems={'flex-end'}>
      <Button onClick={() => setPage((prev) => (prev <= 10 ? 0 : prev - 10))}>
        {'<<'}
      </Button>
      <Text color={'white'}>..</Text>
      {page - 1 != 0 && (
        <Button
          onClick={() => setPage((prev) => (prev == 1 ? prev : prev - 1))}
          height={'30px'}
          width="30px"
          maxH={'max-content'}
          maxW="max-content"
          _hover={{ transform: 'scale(1.4)' }}
          transition="all 0.2s ease-in"
        >
          {page - 1}
        </Button>
      )}
      <Button backgroundColor={'lightgreen'}>{page}</Button>
      {page + 1 != 250 && (
        <Button
          onClick={() => setPage((prev) => (prev == 250 ? prev : prev + 1))}
          height={'30px'}
          width="30px"
          maxH={'max-content'}
          maxW="max-content"
          _hover={{ transform: 'scale(1.4)' }}
          transition="all 0.2s ease-in"
        >
          {page + 1}
        </Button>
      )}
      <Text color={'white'}>..</Text>
      <Button
        onClick={() => setPage((prev) => (prev >= 250 ? prev : prev + 10))}
      >
        {'>>'}
      </Button>
    </Flex>
  );
}

export default Pagination;
