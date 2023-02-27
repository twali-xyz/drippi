import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
const PhotoSection = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      maxH={"25vw"}
      overflowY={"hidden"}
      gap={0}
    >
      <GridItem w="150%" h="auto" bg="blue.500">
        <Image
          src={"/images/square1.jpeg "}
          alt={"demo"}
          width={"7500"}
          height={"7500"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      <GridItem
        w="100%"
        h="auto"
        bg="blue.500"
        pos={"relative"}
        bottom={"99px"}
      >
        <Image
          src={"/images/square2.jpeg "}
          alt={"demo"}
          width={"750"}
          height={"750"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      <GridItem
        w="100%"
        h="auto"
        bg="blue.500"
        pos={"relative"}
        bottom={"99px"}
      >
        <Image
          src={"/images/square3.jpeg "}
          alt={"demo"}
          width={"750"}
          height={"750"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      <GridItem
        w="100%"
        h="auto"
        bg="blue.500"
        pos={"relative"}
        bottom={"99px"}
      >
        <Image
          src={"/images/square4.jpeg "}
          alt={"demo"}
          width={"750"}
          height={"750"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
    </Grid>
  );
};

export default PhotoSection;
