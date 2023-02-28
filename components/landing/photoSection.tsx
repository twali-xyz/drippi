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
          src={"/images/photosection_1.jpeg "}
          alt={"demo"}
          width={"1500"}
          height={"1500"}
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
          src={"/images/photosection_2.jpeg "}
          alt={"demo"}
          width={"1000"}
          height={"1000"}
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
          src={"/images/photosection_3.jpeg "}
          alt={"demo"}
          width={"1000"}
          height={"1000"}
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
          src={"/images/photosection_4.jpeg "}
          alt={"demo"}
          width={"1000"}
          height={"1000"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
    </Grid>
  );
};

export default PhotoSection;
