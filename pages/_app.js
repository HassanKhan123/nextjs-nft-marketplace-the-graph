import Head from "next/head";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Header from "../components/Header";
import "../styles/globals.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/31828/nft-marketplace/v0.0.3",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <NotificationProvider>
            <Header />
            <Component {...pageProps} />
          </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
