import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PhotoSection from "@/components/landing/photoSection";
import ScrollingText from "@/components/landing/scrollingText";
import { motion } from "framer-motion";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);
  const MotionSVG = motion.svg;
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Descripe the app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/zdj4rip.css" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Flex
          width={"100%"}
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
          bg={"secondary"}
          py={6}
          mt={{ base: 16, md: 8 }}
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
          >
            <Box>
              <Text
                className={"hero-text"}
                fontWeight={"500"}
                color={"primary"}
                fontSize={{
                  base: "calc((4.5 - 1) * calc(.012 * min(100vh, 900px)) + 1rem)",
                  md: "calc((4.5 - 1) * 1.2vw + 1rem)",
                }}
                pt={{ base: 8 }}
                px={{ base: 0, md: 0 }}
                mr={{ base: 0, md: 6 }}
                mb={{ base: 0, md: 12 }}
                textAlign={"center"}
                letterSpacing={"0em"}
                whiteSpace={"pre-wrap"}
                lineHeight={{
                  base: "calc(1.2 * (1 + (1 - 4.5)/25))",
                  md: "calc(1.2 * (1 + (1 - 4.5)/25))",
                }}
                maxW={{ base: "686px", lg: "100%" }}
              >
                LIVE OUTSIDE THE BOUNDS, GET PAID WITHIN THEM
              </Text>
            </Box>
            <Text
              fontSize={" calc((1.5) - 1) * 1.2vw + 1rem) !important"}
              fontWeight={"500"}
              color={"primary"}
              pos={"relative"}
              right={-700}
              bottom={8}
              pt={8}
            >
              <motion.svg
                className="Marquee-svg"
                fill="currentColor"
                aria-hidden="true"
                style={{ height: "94px", transform: "translateY(3.4px)" }}
                viewBox="0 0 2200 94"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  className="Marquee-path-group"
                  transform="translate(0, 1.7000000000000002)"
                >
                  <path
                    className="Marquee-path"
                    fill="none"
                    stroke="transparent"
                    stroke-width="0"
                    d="M-550,22.508000000000003  L-550,22.508000000000003 S-183.15,82.50800000000001 0,82.50800000000001 S366.85,22.508000000000003 550,22.508000000000003 S916.85,82.50800000000001 1100,82.50800000000001 S1466.85,22.508000000000003 1650,22.508000000000003 S2016.85,82.50800000000001 2200,82.50800000000001"
                    stroke-dasharray="241 12.32 25 12.32 "
                    id="yui_3_17_2_1_1670442891158_59470"
                    stroke-dashoffset="231"
                  ></path>
                </g>
                <text>
                  <motion.textPath
                    className="Marquee-svg-text"
                    href="#yui_3_17_2_1_1670442891158_59470"
                    // animate x offset to move the text
                    initial={{ startOffset: 291 }}
                    animate={{ startOffset: 0 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <tspan className="Marquee-svg-text" x="0">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="253.32">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="290.64">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="543.96">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="581.2800000000001">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="834.6000000000001">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="871.9200000000002">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1125.2400000000002">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1162.5600000000002">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1415.88">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1453.2">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1706.52">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1743.84">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="1997.1599999999999">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2034.4799999999998">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2287.7999999999997">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2325.12">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2578.44">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2615.76">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2869.0800000000004">
                      〰️
                    </tspan>
                    <tspan className="Marquee-svg-text" x="2906.4000000000005">
                      Unleash your future
                    </tspan>
                    <tspan className="Marquee-svg-text" x="3159.7200000000007">
                      〰️
                    </tspan>
                  </motion.textPath>
                </text>
                <text>
                  <textPath
                    className="Marquee-svg-group"
                    visibility="hidden"
                    href="#yui_3_17_2_1_1670442891158_59470"
                  >
                    <tspan className="Marquee-svg-text">
                      Unleash your future
                    </tspan>

                    <tspan className="Marquee-svg-text">〰️</tspan>
                  </textPath>
                </text>
                <g
                  className="Marquee-hitbox"
                  data-hitbox=""
                  aria-labelledby="ariaLabelyui_3_17_2_1_1670442891158_59470"
                >
                  <g
                    className="Marquee-path-hitbox-group"
                    transform="translate(0, -5.6270000000000024)"
                  >
                    <path
                      className="Marquee-path-hitbox"
                      fill="none"
                      stroke="transparent"
                      d="M-550,22.508000000000003  L-550,22.508000000000003 S-183.15,82.50800000000001 0,82.50800000000001 S366.85,22.508000000000003 550,22.508000000000003 S916.85,82.50800000000001 1100,82.50800000000001 S1466.85,22.508000000000003 1650,22.508000000000003 S2016.85,82.50800000000001 2200,82.50800000000001"
                      id="yui_3_17_2_1_1670442891158_59470"
                      stroke-width="34"
                    ></path>
                    <path
                      className="Marquee-path-hitbox-focus-outline"
                      fill="none"
                      stroke="transparent"
                      stroke-width="2px"
                      d="
      M-550,94
       L-550,30.6 S-183.15,90.6 0,90.6 S366.85,30.6 550,30.6 S916.85,90.6 1100,90.6 S1466.85,30.6 1650,30.6 S2016.85,90.6 2200,90.6
      M-550,60
       L-550,3.4000000000000004 S-183.15,63.4 0,63.4 S366.85,3.4000000000000004 550,3.4000000000000004 S916.85,63.4 1100,63.4 S1466.85,3.4000000000000004 1650,3.4000000000000004 S2016.85,63.4 2200,63.4
    "
                      style={{ transform: "translateY(3.4px)" }}
                    ></path>
                  </g>
                </g>
              </motion.svg>
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
                onClick={() => {
                  window.location.href = window.location.origin + "/waitlist";
                }}
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
                  drippi accepts payments from all your favorite platforms and
                  drops them into your account on your preferred payday, in a
                  way your bank can understand.
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
            mr={"calc(2vw * .85)"}
            mt={{ base: 4, md: "calc(5vw * .85)" }}
            width={"100%"}
            maxW={"671px"}
            height={{ base: "650px", md: "calc(65vw)" }}
            maxH={{ base: "calc(min(calc(max(550px, 65vw)), 1050px))" }}
            position={"relative"}
            mb={10}
            className={"tree"}
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
          </MotionBox>
        </Flex>
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
                  We know that diversified income is the key to wealth
                  generation — your bank doesn’t get it.
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
            maxW={{ base: "361px", md: "361px", lg: "calc(min(750px, 30vw))" }}
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
        <Flex
          width={"100%"}
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
          bg={"primary"}
          py={6}
          color={"black"}
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
                    We work with your existing bank account, whether it’s
                    personal or owned by your LLC. No account switching needed!
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
                    You worked hard, you deserve all your money so you can put
                    it to work the way you decide.
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
                    Use our platform so you can grow your business and make your
                    15 minutes last a lifetime.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </MotionBox>
          </Flex>
        </Flex>
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
                maxW={{ base: "100%", md: "600px", lg: "100%" }}
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
                  Sign up with your email address to join the Drip Club
                  waitlist.
                </Text>
              </Flex>
            </Flex>
            <FormControl
              isRequired
              css={{ textAlignLast: "left" }}
              pt={4}
              pr={4}
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
              color={"black"}
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
        <PhotoSection />
        <VStack width={"100%"} background={"primary"} pt={4} pb={24}>
          <ScrollingText
            color={"black"}
            fontSize={"calc(7 * 1.1vw + 1rem) !important"}
            text="unleash your future ~~ unleash your future ~~ unleash your future ~~ unleash your future ~~ unleash your future ~~ unleash your future"
          />
          <Button
            mt={{
              base: "unset",
              md: "136.5px !important",
              lg: "260px !important",
            }}
            bg={"black"}
            color={"primary"}
            _hover={{
              textDecoration: "none",
            }}
            py={6}
            px={16}
            fontWeight={"400"}
            letterSpacing={"0.1em"}
            height={"70px"}
            width={"337px"}
            borderRadius={"full"}
            fontSize={"1rem"}
          >
            Sign Up →
          </Button>
        </VStack>
      </Layout>
    </>
  );
}
