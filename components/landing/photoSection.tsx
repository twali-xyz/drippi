import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import img1 from "../../public/images/photosection_1.jpeg";
import img2 from "../../public/images/photosection_2.jpeg";
import img3 from "../../public/images/photosection_3.jpeg";
import img4 from "../../public/images/photosection_4.jpeg";
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
          src={img1}
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
          src={img2}
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
          src={img3}
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
          src={img4}
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
