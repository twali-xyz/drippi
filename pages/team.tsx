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
          textAlign={"center"}
        >
          By creators, for creators
        </Text>
        <Text
          color={"#ffffff"}
          fontSize={" calc((2.6 - 1) * 1.2vw + 1rem);"}
          fontWeight={"500"}
          pt={20}
          pb={16}
          textAlign={"center"}
        >
          Meet the Drip Club.
        </Text>
        <SimpleGrid minChildWidth={"12rem"} spacing={6} px={8} w={"100%"}>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Avatar
                icon={
                  <Image
                    alt="cokie"
                    src="/images/cokie.jpeg"
                    width={210}
                    height={210}
                    style={{ alignSelf: "flex-start" }}
                  />
                }
                mb={1}
                className={"team-photo"}
                width={210}
                height={210}
                style={{ alignSelf: "flex-start" }}
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
                icon={
                  <Image
                    alt="nick"
                    src="/images/nick.jpeg"
                    width={210}
                    height={210}
                    style={{ alignSelf: "flex-start" }}
                  />
                }
                mb={1}
                className={"team-photo"}
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
                icon={
                  <Image
                    alt="casey"
                    src="/images/casey.jpeg"
                    width={210}
                    height={210}
                    style={{ alignSelf: "flex-start" }}
                  />
                }
                mb={1}
                className={"team-photo"}
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
                icon={
                  <Image
                    alt="ivy"
                    src="/images/ivy.jpeg"
                    width={210}
                    height={210}
                    style={{ alignSelf: "flex-start" }}
                  />
                }
                mb={1}
                className={"team-photo"}
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
                icon={
                  <Image
                    alt="hone"
                    src="/images/hone.jpeg"
                    width={210}
                    height={210}
                    style={{ alignSelf: "flex-start" }}
                  />
                }
                mb={1}
                className={"team-photo"}
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
