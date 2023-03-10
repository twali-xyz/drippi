import { Flex, Button, VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <VStack
      as={"footer"}
      width={"100%"}
      background={"primary"}
      color={"black"}
      fontFamily={"normal"}
      pt={4}
    >
      <Flex
        width={"100%"}
        maxW={"1075px"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        pb={4}
      >
        <VStack minW={"25vw"} pos={"relative"}>
          <Text fontWeight={"700"} fontSize={"xs"} pb={1}>
            CONTACT
          </Text>
          <Button
            py={"4px"}
            textUnderlineOffset={"2.5px"}
            fontSize={"calc((.8 - 1) * 1.2vw + 1rem)"}
            variant={"link"}
            color={"black"}
            textDecor={"underline"}
            fontWeight={"300"}
            onClick={() => {
              router.push("/team");
            }}
          >
            About us
          </Button>
          <Button
            py={"4px"}
            textUnderlineOffset={"2.5px"}
            fontSize={"calc((.8 - 1) * 1.2vw + 1rem)"}
            variant={"link"}
            color={"black"}
            textDecor={"underline"}
            fontWeight={"300"}
            as={"a"}
            href={"mailto:hello@drippi.com"}
          >
            Email us
          </Button>
        </VStack>
        <VStack
          minW={"25vw"}
          fontSize={"calc((.8 - 1) * 1.2vw + 1rem)"}
          display={{ base: "none", md: "block" }}
        >
          <Text whiteSpace={"pre-wrap"}>
            BROUGHT TO YOU FROM NEW YORK CITY, NEW YORK.
          </Text>
          <Text
            w={"100%"}
            textAlign={{ base: "center" }}
            pos={"relative"}
            right={"1.75rem"}
            bottom={".75rem"}
          >
            10014.
          </Text>
        </VStack>
        <VStack minW={"25vw"}>
          <Text fontWeight={"700"} fontSize={"xs"} pos={"relative"}>
            LEARN
          </Text>
          <Button
            textUnderlineOffset={"2.5px"}
            fontSize={"calc((.8 - 1) * 1.2vw + 1rem)"}
            py={"4px"}
            mt={"0px !important"}
            variant={"link"}
            color={"black"}
            textDecor={"underline"}
            fontWeight={"300"}
            onClick={() => {
              router.push("/product");
            }}
          >
            How it works
          </Button>
        </VStack>
      </Flex>
      <VStack
        fontSize={"calc((.8 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)"}
        display={{ base: "block", md: "none" }}
      >
        <Text whiteSpace={"pre-wrap"} textAlign={"center"}>
          BROUGHT TO YOU FROM NEW YORK CITY, NEW YORK. 10014.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Footer;
