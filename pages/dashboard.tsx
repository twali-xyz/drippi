import Layout from "@/components/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <Flex
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Dashboard
      </Flex>
    </Layout>
  );
};

export default Dashboard;
