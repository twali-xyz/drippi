import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export function SectionC({}) {
  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justify={"center"}
      alignItems={"center"}
      bg={"primary"}
      py={6}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        justify={"center"}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
        w={"100%"}
        py={"96.5px"}
        px={{ base: "16px", md: "0px" }}
      >
        <MotionVStack
          maxW={{ base: "100%", md: "50%" }}
          p={0}
          m={0}
          mr={0}
          mb={12}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            fontFamily={"normal"}
            fontWeight={"500"}
            fontSize={{
              base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
              md: "calc((4.5 - 1) * 1.2vw + 1rem)",
            }}
            whiteSpace={"pre-wrap"}
            lineHeight={"calc(1.2 * (1 + (1 - 4.5)/25))"}
          >
            <Text mb={"2rem"}>
              We simplify your payments so you can continue to{" "}
            </Text>
            <span className="bold">be extraordinary.</span>{" "}
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
          maxW={"671px"}
          maxH={{ base: "calc(max(550px, 65vw))" }}
          position={"relative"}
        >
          <Accordion
            allowToggle
            background={"#ffffff"}
            p={6}
            minH={"477px"}
            maxW={"473px"}
            w={"100%"}
            mx={{ base: "auto", md: 16 }}
            pos={"relative"}
            left={{ base: "0", md: "2rem" }}
          >
            <AccordionItem borderColor={"black "} py={4}>
              <Text>
                <AccordionButton
                  fontSize={{
                    base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                    md: "calc((1.4 - 1) * 1.2vw + 1rem)",
                  }}
                  fontWeight={"500"}
                  borderColor={"black"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    No account switching
                  </Box>
                  <AccordionIcon fontSize={"xxl"} />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                We work with your existing bank account, whether it’s personal
                or owned by your LLC. No account switching needed!
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor={"black "} py={4}>
              <Text>
                <AccordionButton
                  fontSize={{
                    base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                    md: "calc((1.4 - 1) * 1.2vw + 1rem)",
                  }}
                  fontWeight={"500"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Receive 100% of your money
                  </Box>
                  <AccordionIcon fontSize={"xxl"} />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                You worked hard, you deserve all your money so you can put it to
                work the way you decide.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem borderColor={"black "} py={4}>
              <Text>
                <AccordionButton
                  fontSize={{
                    base: "calc((1.4 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                    md: "calc((1.4 - 1) * 1.2vw + 1rem)",
                  }}
                  fontWeight={"500"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Enhance your business
                  </Box>
                  <AccordionIcon fontSize={"xxl"} />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                Use our platform so you can grow your business and make your 15
                minutes last a lifetime.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MotionBox>
      </Flex>
    </Flex>
  );
}
