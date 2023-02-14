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
      <VStack maxW={{ base: "100%", md: "50%" }} p={0} m={0} mr={4} mb={12}>
        <Box>
          <Text
            fontWeight={"500"}
            color={"primary"}
            fontSize={{
              base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((4.5 - 1) * 1.2vw + 1rem)",
            }}
            pt={{ base: 28, md: "calc(1.2 * (1 + (1 - 4.5)/25))" }}
            px={{ base: 0, md: 0 }}
            mr={{ base: 0, md: 6 }}
            mb={{ base: 0, md: 6 }}
            textAlign={"center"}
            letterSpacing={"0em"}
            whiteSpace={"pre-wrap"}
            lineHeight={{
              base: "calc(1.2 * (1 + (1 - 4.5)/25))",
              md: "calc(1.2 * (1 + (1 - 4.5)/25))",
            }}
            maxW={"686px"}
          >
            LIVE OUTSIDE THE BOUNDS, GET PAID WITHIN THEM
          </Text>
        </Box>
        <Text color={"primary"} fontSize={"md"} py={8}>
          Unleash your future
        </Text>

        <Flex
          width={"100%"}
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
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
              pt={12}
              pb={2}
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
              them into your account on your preferred payday, in a way your
              bank can understand.
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
              You control the frequency and amount of each payday, leave the
              rest to us.{" "}
            </Text>
          </Flex>
        </Flex>
      </VStack>
      <Box
        px={"0px"}
        mr={"calc(2vw * .85)"}
        mt={{ base: 4, md: "calc(5vw * .85)" }}
        width={"100%"}
        maxW={"671px"}
        height={{ base: "425px", md: "calc(65vw)" }}
        position={"relative"}
        // add a clip path to make the top of the image rounded(try again)
      >
        <svg
          data-image-mask-id="round-top"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <defs>
            <clipPath id="round-top" clipPathUnits="objectBoundingBox">
              <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0"></path>
            </clipPath>
          </defs>
        </svg>

        <Image
          src="/images/tree_right.png"
          alt="Picture of the author"
          style={{ clipPath: "url(#round-top);" }}
          fill
          objectFit={"cover"}
          objectPosition={"calc(50%) calc(50%)"}
        />
      </Box>
    </Flex>
  );
}
