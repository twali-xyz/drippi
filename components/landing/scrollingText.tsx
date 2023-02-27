import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";

interface ScrollingTextProps {
  text: string;
  color?: string;
  fontSize?: string;
}

const ScrollingText = ({
  text,
  color = "primary",
  fontSize = "calc((1.5 - 1) * 1.2vw + 1rem) !important",
}: ScrollingTextProps) => {
  const MotionText = motion(Text);

  return (
    <Flex pos={"relative"} height={"100px"}>
      <MotionText
        fontSize={fontSize}
        color={color || "primary"}
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
