import Layout from "@/components/layout";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Product = () => {
  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);
  return (
    <Layout>
      <Flex
        width={"100%"}
        height={"100%"}
        justify={"space-between"}
        alignItems={"center"}
        bg={"primary"}
        py={0}
        pt={{ base: 24, md: 0 }}
        flexDir={{ base: "column", md: "row" }}
        px={{ base: "16px", md: "0px" }}
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
          color={"black"}
        >
          <Box>
            <Text
              fontFamily={"normal"}
              fontWeight={"500"}
              fontSize={{
                base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                md: "calc((4.5 - 1) * 1.2vw + 1rem)",
              }}
              pt={{ base: 28 }}
              px={{ base: 0, md: 0 }}
              mr={{ base: 0, md: 6 }}
              mb={{ base: 0, md: 0 }}
              letterSpacing={"0em"}
              whiteSpace={"pre-wrap"}
              lineHeight={{
                base: "calc(1.2 * (1 + (1 - 4.5)/25))",
                md: "calc(1.2 * (1 + (1 - 4.5)/25))",
              }}
              maxW={"686px"}
            >
              CREATE YOUR REALITY
            </Text>
          </Box>
          <Flex
            width={"100%"}
            height={"100%"}
            justify={"center"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Flex flexDir={"column"} px={{ base: "0", md: 6 }}>
              <Text
                css={{ wordSpacing: "0.2rem" }}
                fontSize={{
                  base: "calc((2.6 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                  md: "calc((2.6 - 1) * 1.2vw + 1rem)",
                }}
                lineHeight={"calc(1.2 * (1 + (1 - 2.6)/25))"}
                fontWeight={"500"}
                pt={12}
                pb={2}
              >
                drippi makes your income readable by aggregating earnings from
                every platform you work with and sending them to you how & when
                you want them.
              </Text>
              <Text
                css={{ wordSpacing: "0.2rem" }}
                fontSize={{
                  base: "calc((2.6 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                  md: "calc((2.6 - 1) * 1.2vw + 1rem)",
                }}
                lineHeight={"calc(1.2 * (1 + (1 - 2.6)/25))"}
                fontWeight={"500"}
                pt={12}
                pb={2}
              >
                You drive, we’ll navigate.
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
        </MotionVStack>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          px={"0px"}
          mr={"calc(12vw * .85)"}
          mt={{ base: 4, md: "calc(5vw * .85)" }}
          width={"100%"}
          maxW={"453px"}
          height={{ base: "650px", md: "calc(21vw)" }}
          maxH={{ base: "calc(max(550px, 65vw))" }}
          position={"relative"}
          mb={10}
        >
          <svg
            data-image-mask-id="yui_3_17_2_1_1674573224013_46296"
            width="0"
            height="0"
            style={{ position: "absolute" }}
          >
            <defs>
              <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0.799,0 A0.201,0.302,0,0,0,0.649,0.1 A0.201,0.303,0,0,0,0.351,0.1 A0.201,0.303,0,0,0,0,0.303 V0.697 A0.201,0.303,0,0,0,0.351,0.9 A0.201,0.303,0,0,0,0.649,0.9 A0.201,0.303,0,0,0,1,0.697 V0.303 A0.201,0.303,0,0,0,0.799,0"></path>
              </clipPath>
            </defs>
          </svg>
          <Image
            src="/images/product_1.png"
            alt="Picture of the author"
            style={{ clipPath: "url(#clip-path);" }}
            fill
            objectFit={"cover"}
            objectPosition={"calc(50%) calc(50%)"}
          />
        </MotionBox>
      </Flex>
    </Layout>
  );
};

export default Product;
