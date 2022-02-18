import { Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import useStore from "../../store/store";
import CoinListView from "./CoinList.view";

export default function CoinListContainer() {
  const [coinList, setCoinList] = useState([]);
  const status = useStore((state) => state.status);
  const [page, setPage] = useState(1);
  const setStatus = useStore((state) => state.setStatus);

  const getList = async () => {
    setStatus("loading");
    const res = await fetch(
      `https://api.coingecko.com/api//v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=${page}`,
      {
        method: "GET",
      }
    );

    if (res.status == "200") {
      const resJson = await res.json();

      setCoinList(resJson);
      setStatus("success");
    } else {
      setStatus("reject");
    }
  };
  useEffect(() => {
    getList();
  }, [page]);

  if (status == "loading") {
    return (
      <Layout title="Loading...">
        <Flex
          justifyContent={"center"}
          alignItems="center"
          width={"100vw"}
          height="60vh"
        >
          <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      </Layout>
    );
  }
  return (
    <>
      <Layout title="Market Statistics">
        <CoinListView coinList={coinList} page={page} setPage={setPage} />
      </Layout>
    </>
  );
}
