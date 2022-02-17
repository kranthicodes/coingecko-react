import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Layout({ title = "default" }) {
  return (
    <Flex
      bg="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
      minH="100vh"
      minW="100vw"
    >
      <Flex py="1rem" justifyContent="center" w="100%" minH="68px">
        <Text color="#f2f2f2" fontSize="2.5rem">{title}</Text>
      </Flex>
    </Flex>
  );
}
