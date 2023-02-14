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
      px={{ base: "16px", md: "0px" }}
    >
      <VStack maxW={{ base: "100%", md: "50%" }}>
        <Text
          fontWeight={"500"}
          color={"primary"}
          fontSize={{
            base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
            md: "calc((4.5 - 1) * 1.2vw + 1rem)",
          }}
          pt={28}
          px={{ base: 0, md: 8 }}
          textAlign={"center"}
          letterSpacing={"0em"}
          whiteSpace={"pre-wrap"}
          lineHeight={{
            base: "calc(1.2 * (1 + (1 - 4.5)/25))",
            md: "calc(1.2 * (1 + (1 - 4.5)/25))",
          }}
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
          letterSpacing={"0.05em"}
          _hover={{
            textDecoration: "none",
          }}
          height={{ base: "59px", md: "72px" }}
          width={{ base: "100%", md: "288px" }}
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mr={{ base: 0, md: "32px !important" }}
          zIndex={1}
          p={".9em 1.503em"}
          fontFamily={"light"}
          data-testid="join-the-waitlist-button"
        >
          Join the waitlist
        </Button>
        <Flex flexDir={"column"} px={{ base: "0", md: 8 }}>
          <Text
            css={{ wordSpacing: "0.2rem" }}
            color={"primary"}
            fontSize={{
              base: "calc((2.6 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((2.6 - 1) * 1.2vw + 1rem)",
            }}
            fontWeight={"500"}
            pt={8}
          >
            Welcome to the Drip Club.
          </Text>
          <Text
            fontSize={{
              base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((1.4 - 1) * 1.2vw + 1rem)",
            }}
            lineHeight={{
              base: "calc(1.2 * (1 + (1 - 1.4)/25))",
              md: "calc(1.2 * (1 + (1 - 1.4)/25))",
            }}
            fontWeight={"500"}
            color={"primary"}
            py={4}
          >
            drippi accepts payments from all your favorite platforms and drops
            them into your account on your preferred payday, in a way your bank
            can understand.
          </Text>
          <Text
            fontSize={{
              base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((1.4 - 1) * 1.2vw + 1rem)",
            }}
            lineHeight={{
              base: "calc(1.2 * (1 + (1 - 1.4)/25))",
              md: "calc(1.2 * (1 + (1 - 1.4)/25))",
            }}
            fontWeight={"500"}
            color={"primary"}
          >
            You control the frequency and amount of each payday, leave the rest
            to us.{" "}
          </Text>
        </Flex>
      </VStack>
      <Box px={"0px"} pr={"40px"} mt={{ base: 4, md: -10 }}>
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
