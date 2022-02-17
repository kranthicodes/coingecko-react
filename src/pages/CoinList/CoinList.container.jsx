import React from "react";
import Layout from "../../components/Layout";
import CoinListView from "./CoinList.view";

export default function CoinListContainer() {
  return (
    <>
      <Layout title="Market Data">
        <CoinListView />
      </Layout>
    </>
  );
}
