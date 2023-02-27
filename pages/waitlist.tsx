import Layout from "@/components/layout";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ScrollingText from "../components/landing/scrollingText";
const Waitlist = () => {
  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);
  return (
    <Layout>
      <Flex
        width={"100%"}
        height={"100%"}
        justify={"center"}
        alignItems={"center"}
        bg={"secondary"}
        py={12}
        pt={{ base: 32, md: 12 }}
        flexDir={{ base: "column", md: "row-reverse" }}
        px={{ base: "16px", md: "30px" }}
      >
        <MotionVStack
          maxW={{ base: "100%", md: "50%" }}
          p={0}
          m={0}
          mr={4}
          mb={12}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box px={{ base: 0, md: 16 }}>
            <Text
              fontWeight={"500"}
              color={"primary"}
              fontSize={{
                base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                md: "calc((4.5 - 1) * 1.2vw + 1rem)",
              }}
              px={{ base: 0, md: 0 }}
              mr={{ base: 0, md: 6 }}
              mb={{ base: 0, md: 12 }}
              letterSpacing={"0em"}
              whiteSpace={"pre-wrap"}
              lineHeight={{
                base: "calc(1.2 * (1 + (1 - 4.5)/25))",
                md: "calc(1.2 * (1 + (1 - 4.5)/25))",
              }}
              maxW={"686px"}
            >
              Join the Drip Club.
            </Text>
            <Flex flexDir={"column"}>
              <Text
                fontSize={{
                  base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                  md: "calc((1.4 - 1) * 1.2vw + 1rem)",
                }}
                lineHeight={{
                  base: "calc((1.3 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                  md: "calc((1.3 - 1) * 1.2vw + 1rem)",
                }}
                color={"#ffffff"}
                py={4}
              >
                Sign up with your email address to join the Drip Club waitlist.
              </Text>
            </Flex>
            <FormControl
              isRequired
              css={{ textAlignLast: "left" }}
              pr={4}
              py={8}
            >
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
                alignSelf={"flex-start"}
              />
            </FormControl>
            <Flex
              width={"100%"}
              height={"100%"}
              justify={"flex-start"}
              alignItems={"flex-start"}
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
                height={"52px"}
                fontFamily={"light"}
                data-testid="join-the-waitlist-button"
              >
                Sign up
              </Button>
            </Flex>
          </Box>
        </MotionVStack>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          px={"0px"}
          mr={"calc(2vw * .85)"}
          mt={{ base: 4, md: "calc(5vw * .85)" }}
          width={"100%"}
          maxW={"685px"}
          height={{ base: "650px", md: "calc(65vw)" }}
          maxH={{ base: "calc(max(550px, 65vw))" }}
          position={"relative"}
          mb={10}
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
            src="/images/waitlist_1.jpeg"
            alt="Picture of the author"
            style={{ clipPath: "url(#round-top);" }}
            fill
            objectFit={"cover"}
            objectPosition={"calc(50%) calc(50%)"}
          />
        </MotionBox>
      </Flex>
    </Layout>
  );
};

export default Waitlist;
