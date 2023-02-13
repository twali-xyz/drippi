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
      py={16}
    >
      <VStack maxW={"50%"}>
        <Text
          color={"primary"}
          fontSize={"10vmin"}
          maxW={"42vw"}
          mt={0}
          textAlign={"center"}
          lineHeight={"10vmin"}
        >
          LIVE OUTSIDE THE BOUNDS, GET PAID WITHIN THEM
        </Text>
        <Text color={"primary"}>Unleash your future</Text>

        <Button
          background={"primary"}
          color={"black"}
          rounded={"full"}
          fontWeight={"400"}
          fontSize={"xs"}
          letterSpacing={"0.12rem"}
          _hover={{
            textDecoration: "none",
          }}
          width={"190px"}
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            sm: "none",
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mr={2}
          data-testid="join-the-waitlist-button"
        >
          Join the waitlist
        </Button>
        <Text color={"primary"}>Welcome to the Drip Club.</Text>
        <Text color={"primary"}>
          drippi accepts payments from all your favorite platforms and drops
          them into your account on your preferred payday, in a way your bank
          can understand.
        </Text>
        <Text color={"primary"}>
          You control the frequency and amount of each payday, leave the rest to
          us.{" "}
        </Text>
      </VStack>
      <Box px={"40px"} mt={6}>
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
