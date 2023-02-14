import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export function SectionA({}) {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justify={"center"}
      alignItems={"center"}
      bg={"secondary"}
      py={6}
      flexDir={{ base: "column", md: "row" }}
    >
      <VStack maxW={{ base: "100%", md: "50%" }}>
        <Text
          color={"primary"}
          fontSize={"10vmin"}
          maxW={{ base: "100%", md: "42vw" }}
          pt={24}
          textAlign={"center"}
          lineHeight={"10vmin"}
        >
          LIVE OUTSIDE THE BOUNDS, GET PAID WITHIN THEM
        </Text>
        <Text color={"primary"} fontSize={"md"} py={14}>
          Unleash your future
        </Text>

        <Button
          background={"primary"}
          color={"black"}
          rounded={"full"}
          fontWeight={"400"}
          fontSize={"sm"}
          letterSpacing={"0.18rem"}
          _hover={{
            textDecoration: "none",
          }}
          height={"70px"}
          width={"280px"}
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mr={2}
          zIndex={1}
          data-testid="join-the-waitlist-button"
        >
          Join the waitlist
        </Button>
        <Flex flexDir={"column"} px={8}>
          <Text
            css={{ wordSpacing: "0.2rem" }}
            color={"primary"}
            fontSize={"xl"}
            pt={8}
          >
            Welcome to the Drip Club.
          </Text>
          <Text color={"primary"} fontSize={"md"} py={4}>
            drippi accepts payments from all your favorite platforms and drops
            them into your account on your preferred payday, in a way your bank
            can understand.
          </Text>
          <Text color={"primary"} fontSize={"md"}>
            You control the frequency and amount of each payday, leave the rest
            to us.{" "}
          </Text>
        </Flex>
      </VStack>
      <Box px={"40px"} mt={{ base: 4, md: -10 }}>
        <Image
          src="https://via.placeholder.com/750"
          alt="Picture of the author"
          width={750}
          height={750}
        />
      </Box>
    </Flex>
  );
}
