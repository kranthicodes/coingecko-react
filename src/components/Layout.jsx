import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Layout({
  titleIconSrc = '',
  title = 'default',
  children = '',
}) {
  return (
    <Flex
      bg="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
      minH="100vh"
      minW="100vw"
      flexDir={'column'}
    >
      <Flex
        py="1rem"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="68px"
        gap="20px"
      >
        {titleIconSrc && (
          <Image src={titleIconSrc} height={'25px'} width="25px" alt="icon" />
        )}
        <Text color="#f2f2f2" fontSize="2.5rem">
          {title}
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
}
