import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export function SectionD({}) {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justify={"flex-start"}
      alignItems={"center"}
      bg={"secondary"}
      pb={12}
      pt={0}
      mt={0}
      flexDir={{ base: "column-reverse", md: "row-reverse" }}
      px={{ base: "calc((1.3 - 1) * 1.2vw + 1rem)", md: "64px" }}
    >
      <VStack
        w={{ base: "100%", md: "55%" }}
        maxW={{ base: "550px", md: "100%" }}
        p={0}
        m={0}
        ml={4}
        mb={12}
        textAlign={"center"}
        pos={"relative"}
        left={{ base: 0, md: 16 }}
      >
        <Box width={"100%"}>
          <Text
            color={"#ffffff"}
            fontSize={{
              base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((4.5 - 1) * 1.2vw + 1rem)",
            }}
            fontWeight={"500"}
            px={{ base: 0, md: 0 }}
            mb={6}
            pt={{ base: 8 }}
            textAlign={"start"}
            letterSpacing={"0em"}
            whiteSpace={"pre-wrap"}
            lineHeight={{
              base: "calc(1.2 * (1 + (1 - 4.5)/25))",
              md: "calc(1.2 * (1 + (1 - 4.5)/25))",
            }}
            maxW={{ base: "100%", md: "600px" }}
          >
            Join our waitlist
          </Text>
        </Box>

        <Flex
          width={"100%"}
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <Flex flexDir={"column"} width={"100%"}>
            <Text
              textAlign={"left"}
              fontSize={{
                base: "19px",
                md: "sm",
              }}
              fontWeight={"300"}
              color={"#ffffff"}
              py={6}
            >
              Sign up with your email address to join the Drip Club waitlist.
            </Text>
          </Flex>
        </Flex>
        <FormControl isRequired css={{ textAlignLast: "left" }} pt={4} pr={4}>
          <FormLabel
            fontWeight={"light"}
            fontSize={"sm"}
            color={"#ffffff"}
            requiredIndicator={<Text> Email *</Text>}
          ></FormLabel>
          <Input
            type={"email"}
            background={"#ffffff"}
            width={"100%"}
            maxW={"570px"}
          />
        </FormControl>
        <Button
          background={"primary"}
          rounded={"full"}
          fontWeight={"400"}
          fontSize={"sm"}
          letterSpacing={"0.05em"}
          _hover={{
            textDecoration: "none",
          }}
          height={{ base: "52px", md: "52px" }}
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: 0, md: "24px !important" }}
          zIndex={1}
          p={".9em 1.503em"}
          fontFamily={"light"}
          data-testid="join-the-waitlist-button"
          alignSelf={{ base: "flex-start", md: "flex-start" }}
          justifySelf={"flex-end"}
        >
          Sign Up
        </Button>
      </VStack>
      <Box
        px={"0px"}
        mr={"calc(5vw * .85)"}
        mt={{ base: 4, md: "calc(5vw * .85)" }}
        width={"100%"}
        maxW={{ base: "361px", md: "371px", lg: "600px" }}
        height={{ base: "425px", md: "calc(65vw)" }}
        maxH={{ base: "425px", md: "1032px" }}
        minH={{ md: "565px" }}
        position={"relative"}
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
          src="/images/leftLandingTree.png"
          alt="Picture of the author"
          fill
          style={{ clipPath: "url(#round-top);" }}
          objectFit={"cover"}
          objectPosition={"calc(27.5%) calc(45%)"}
        />
      </Box>
    </Flex>
  );
}
