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
      maxH={{ base: "unset", md: "25vw" }}
      overflowY={"hidden"}
      gap={0}
    >
      <GridItem
        h={{ base: "200px", md: "auto" }}
        overflow={"hidden"}
        w="150%"
        bg="blue.500"
      >
        <Image
          src={img1}
          alt={"Creator taking photo"}
          width={"1500"}
          height={"1500"}
          style={{ objectFit: "cover", height: "inherit" }}
        />
      </GridItem>
      <GridItem
        h={{ base: "200px", md: "auto" }}
        overflow={"hidden"}
        w="100%"
        bg="blue.500"
        pos={"relative"}
        bottom={{ base: "unset", md: "99px" }}
      >
        <Image
          src={img2}
          alt={"Woman holding a camera"}
          width={"1000"}
          height={"1000"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      <GridItem
        h={{ base: "200px", md: "auto" }}
        overflow={"hidden"}
        w="100%"
        bg="blue.500"
        pos={"relative"}
        bottom={{ base: "unset", md: "99px" }}
      >
        <Image
          src={img3}
          alt={"Radio equipment"}
          width={"1000"}
          height={"1000"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
      <GridItem
        h={{ base: "200px", md: "auto" }}
        overflow={"hidden"}
        w="100%"
        bg="blue.500"
        pos={"relative"}
        bottom={{ base: "unset", md: "99px" }}
      >
        <Image
          src={img4}
          alt={"Woman modeling in front of red wall"}
          width={"1000"}
          height={"1000"}
          style={{ objectFit: "cover" }}
        />
      </GridItem>
    </Grid>
  );
};

export default PhotoSection;
