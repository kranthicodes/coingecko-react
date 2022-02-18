import { Flex, Image, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import useStore from "../../store/store";
import CoinDetailsView from "./CoinDetails.view";

export default function CoinDetailsContainer() {
  const { id } = useParams();
  const status = useStore((state) => state.status);
  const setStatus = useStore((state) => state.setStatus);
  const [coin, setCoin] = useState({});

  const getCoinDetails = async () => {
    setStatus("loading");
    const res = await fetch(`https://api.coingecko.com/api//v3/coins/${id}`, {
      method: "GET",
    });

    if (res.status == "200") {
      const resJson = await res.json();

      setCoin(resJson);
      setStatus("success");
    } else {
      setStatus("reject");
    }
  };
  useEffect(() => {
    getCoinDetails();
  }, []);

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
      <Layout title={coin.name} titleIconSrc={coin.image?.small || ""}>
        <CoinDetailsView coin={coin} />
      </Layout>
    </>
  );
}
