import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";
import { SectionA } from "@/components/landing/sectionA";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Descripe the app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/zdj4rip.css" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <SectionA />
      </Layout>
    </>
  );
}
