import { Box, Button, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export function SectionB({}) {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justify={"flex-start"}
      alignItems={"center"}
      bg={"primary"}
      py={6}
      pb={12}
      flexDir={{ base: "column-reverse", md: "row-reverse" }}
      px={{ base: "calc((1.3 - 1) * 1.2vw + 1rem)", md: "32px" }}
    >
      <VStack
        w={{ base: "100%", md: "55%" }}
        maxW={{ base: "550px", md: "100%" }}
        p={0}
        m={0}
        ml={4}
        mb={12}
        textAlign={"center"}
      >
        <Box>
          <Text
            color={"black"}
            fontSize={{
              base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((4.5 - 1) * 1.2vw + 1rem)",
            }}
            fontWeight={"500"}
            px={{ base: 0, md: 0 }}
            mb={6}
            pt={{ base: 8 }}
            textAlign={"center"}
            letterSpacing={"0em"}
            whiteSpace={"pre-wrap"}
            lineHeight={{
              base: "calc(1.2 * (1 + (1 - 4.5)/25))",
              md: "calc(1.2 * (1 + (1 - 4.5)/25))",
            }}
          >
            Your audience loves you, your bank doesn’t.
          </Text>
        </Box>

        <Flex
          width={"100%"}
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <Flex flexDir={"column"} px={{ base: "0", md: 8 }}>
            <Text
              fontSize={{
                base: "19px",
                md: "calc((1.3 - 1) * 1.2vw + 1rem)",
              }}
              fontWeight={"300"}
              color={"black"}
              pb={4}
            >
              We know that diversified income is the key to wealth generation —
              your bank doesn’t get it.
            </Text>
            <Text
              fontSize={{
                base: "19px",
                md: "calc((1.3 - 1) * 1.2vw + 1rem)",
              }}
              fontWeight={"300"}
              color={"black"}
            >
              Let us merge your platform payments into a payment readable by
              your bank so you can make your money go further.
            </Text>
          </Flex>
        </Flex>
        <Button
          background={"black"}
          color={"#ffffff"}
          rounded={"full"}
          fontWeight={"400"}
          fontSize={"sm"}
          letterSpacing={"0.05em"}
          _hover={{
            textDecoration: "none",
          }}
          height={{ base: "52px", md: "52px" }}
          width="220px"
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: 0, md: "48px !important" }}
          zIndex={1}
          p={".9em 1.503em"}
          fontFamily={"light"}
          data-testid="join-the-waitlist-button"
          alignSelf={{ base: "center", md: "flex-start" }}
          justifySelf={"flex-end"}
          pos={"relative"}
          top={"70px"}
        >
          How it works →
        </Button>
      </VStack>
      <Box
        px={"0px"}
        mr={"calc(5vw * .85)"}
        mt={{ base: 4, md: "calc(5vw * .85)" }}
        width={"100%"}
        maxW={{ base: "361px", md: "361px", lg: "441px" }}
        height={{ base: "425px", md: "calc(42vw)" }}
        minH={{ md: "525px" }}
        position={"relative"}
      >
        <Image
          src="/images/sectionB.png"
          alt="Picture of the author"
          fill
          objectFit={"cover"}
          objectPosition={"calc(50%) calc(50%)"}
        />
      </Box>
    </Flex>
  );
}
