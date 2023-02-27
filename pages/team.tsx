import Layout from "@/components/layout";
import { Avatar, Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <Layout>
      <VStack
        pt={40}
        bg={"secondary"}
        w={"100%"}
        minH={"100vh"}
        fontFamily={"normal"}
      >
        <Text
          color={"primary"}
          fontSize={"calc((4.5 - 1) * 1.2vw + 1rem)"}
          fontWeight={"500"}
        >
          By creators, for creators
        </Text>
        <Text
          color={"#ffffff"}
          fontSize={" calc((2.6 - 1) * 1.2vw + 1rem);"}
          fontWeight={"500"}
          pt={20}
          pb={16}
        >
          Meet the Drip Club.
        </Text>
        <SimpleGrid minChildWidth={"12rem"} spacing={6} w={"100%"}>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                mb={1}
                className={"team-photo"}
                src="/images/cokie.jpeg"
                style={{ objectPosition: "50% 0% !important" }}
                width={210}
                height={210}
              />
            </Box>
            <Text
              color={"#ffffff"}
              fontWeight={"500"}
              pt={0}
              fontSize={"calc((1.2 - 1) * 1.2vw + 1rem)"}
            >
              Cokie Hasiotis
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={0}
            >
              COFOUNDER
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={2}
            >
              she/her
            </Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                mb={1}
                className={"team-photo"}
                src="/images/nick.jpeg"
                style={{ objectPosition: "50% 0% !important" }}
                width={210}
                height={210}
              />
            </Box>
            <Text
              color={"#ffffff"}
              fontWeight={"500"}
              pt={0}
              fontSize={"calc((1.2 - 1) * 1.2vw + 1rem)"}
            >
              Nick Cooke
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={0}
            >
              COFOUNDER
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={2}
            >
              he/him
            </Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                mb={1}
                className={"team-photo"}
                src="/images/casey.jpeg"
                style={{ objectPosition: "50% 0% !important" }}
                width={210}
                height={210}
              />
            </Box>
            <Text
              color={"#ffffff"}
              fontWeight={"500"}
              pt={0}
              fontSize={"calc((1.2 - 1) * 1.2vw + 1rem)"}
            >
              Casey Blustein
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={0}
            >
              CHIEF OF STAFF
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={2}
            >
              he/him
            </Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                mb={1}
                className={"team-photo"}
                src="/images/ivy.jpeg"
                style={{ objectPosition: "50% 0% !important" }}
                width={210}
                height={210}
              />
            </Box>
            <Text
              color={"#ffffff"}
              fontWeight={"500"}
              pt={0}
              fontSize={"calc((1.2 - 1) * 1.2vw + 1rem)"}
            >
              Ivy Astrix
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={0}
            >
              ENGINEERING
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={2}
            >
              she/her
            </Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                mb={1}
                className={"team-photo"}
                src="/images/hone.jpeg"
                style={{ objectPosition: "50% 0% !important" }}
                width={210}
                height={210}
              />
            </Box>
            <Text
              color={"#ffffff"}
              fontWeight={"500"}
              pt={0}
              fontSize={"calc((1.2 - 1) * 1.2vw + 1rem)"}
            >
              Hone1er
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={0}
            >
              ENGINEERING
            </Text>
            <Text
              color={"#ffffff"}
              fontSize={"calc((.01) * 1vw + .85rem);"}
              mt={"4px !important"}
              pt={2}
            >
              he/him
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
}
