import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useStore from "../../store/store";
import CoinListTable from "./components/CoinListTable";
import Pagination from "./components/Pagination";

export default function CoinListView({ coinList, page, setPage }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection={"column"}
      gap="20px"
    >
      <CoinListTable list={coinList} />
      <Pagination page={page} setPage={setPage} />
    </Flex>
  );
}
