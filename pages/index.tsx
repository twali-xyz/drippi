import Head from "next/head";
import { Inter } from "@next/font/google";
import { Flex } from "@chakra-ui/react";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Descripe the app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Flex
          width={"100%"}
          height={"100vh"}
          justify={"center"}
          alignItems={"center"}
          bg={"secondary"}
        ></Flex>
      </Layout>
    </>
  );
}
