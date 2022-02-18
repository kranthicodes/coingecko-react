import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const arr = [
  "symbol",
  "name",
  "genesis_date",
  "hashing_algorithm",
  "liquidity_score",
  "market_cap_rank",
];
export default function CoinDetailsView({ coin }) {
  const history = useHistory();
  console.log(coin);
  return (
    <Flex flexDir={"column"} gap="20px" maxW="600px" width={"100%"}>
      <Flex
        flexDir={"column"}
        gap="20px"
        border={"1px solid #ababab"}
        borderRadius="5px"
        padding={"20px"}
        boxShadow="md"
        backgroundColor="white"
      >
        <Text fontWeight={"700"}>Description</Text>
        <Text fontWeight={"600"}>
          {coin.description?.en.length <= 100
            ? coin.description?.en || "-"
            : coin.description?.en.slice(0, 300) + "..."}
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        gap="20px"
        border={"1px solid #ababab"}
        borderRadius="5px"
        padding={"20px"}
        boxShadow="md"
        backgroundColor="white"
      >
        {arr.map((item, i) => (
          <Flex
            justifyContent={"space-between"}
            key={i}
            borderBottom="1px solid #eeeeee"
            paddingBottom={"10px"}
          >
            <Text fontWeight={"700"}>
              {item.split("_").join(" ").toUpperCase()}
            </Text>
            <Text fontWeight={"600"}>{coin[item] || "-"}</Text>
          </Flex>
        ))}
      </Flex>
      <Button onClick={() => history.push("/")} mb={5}>
        Back to Market
      </Button>
    </Flex>
  );
}
