import Layout from "@/components/layout";
import { Box, Flex, Grid, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <Layout>
      <VStack bg={"secondary"} w={"100%"} minH={"100vh"} fontFamily={"normal"}>
        <Text color={"primary"} fontSize={"calc((4.5 - 1) * 1.2vw + 1rem)"}>
          By creators, for creators
        </Text>
        <Text fontSize={" calc((2.6 - 1) * 1.2vw + 1rem);"}>
          Meet the Drip Club.
        </Text>
        <SimpleGrid minChildWidth={"12rem"} spacing={6} w={"100%"}>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Image
                src="https://via.placeholder.com/500"
                alt={""}
                width={500}
                height={500}
              />
            </Box>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Pronous</Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Image
                src="https://via.placeholder.com/500"
                alt={""}
                width={500}
                height={500}
              />
            </Box>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Pronous</Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Image
                src="https://via.placeholder.com/500"
                alt={""}
                width={500}
                height={500}
              />
            </Box>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Pronous</Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Image
                src="https://via.placeholder.com/500"
                alt={""}
                width={500}
                height={500}
              />
            </Box>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Pronous</Text>
          </VStack>
          <VStack px={4}>
            <Box borderRadius={"full"} overflow={"hidden"}>
              <Image
                src="https://via.placeholder.com/500"
                alt={""}
                width={500}
                height={500}
              />
            </Box>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Pronous</Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
}
