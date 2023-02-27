import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flex, HStack, Text } from "@chakra-ui/react";

const ScrollingText = ({
  text,
  frequency = 10,
  amplitude = 10,
  color = "primary",
  fontSize = "calc((1.5 - 1) * 1.2vw + 1rem) !important",
}: any) => {
  const MotionText = motion(Text);

  return (
    <Flex pos={"relative"} height={"100px"}>
      <MotionText
        fontSize={fontSize}
        whiteSpace={"nowrap"}
        fontWeight={"500"}
        mr={4}
        initial={{
          x: 415,
        }}
        animate={{
          x: -1000,
        }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 10,
        }}
      >
        {text}
      </MotionText>
    </Flex>
  );
};

export default ScrollingText;
