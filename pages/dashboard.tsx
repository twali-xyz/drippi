import Layout from "@/components/layout";
import Notification from "@/components/notification";
import { BellIcon } from "@chakra-ui/icons";
import {
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";

const mockNotifications = [
  { id: "1", title: "You have unmapped revenues", read: false },
  { id: "2", title: "You have uncategorised expenses", read: false },
];

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <Layout>
      <VStack width={"100%"} px={{ base: 2, md: 16 }} py={32} bg={"secondary"}>
        {/*  welcome message  and view transaction button */}
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          color={"primary"}
          fontFamily={"normal"}
          pb={8}
        >
          <Text
            fontFamily={"normal"}
            lineHeight={"64px"}
            fontSize={"48px"}
            fontWeight={500}
          >
            Hello, {session?.user?.name}!
          </Text>

          <Button
            background={"primary"}
            color={"secondary"}
            rounded={"full"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xs"}
            px={8}
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
            zIndex={1}
            height={"42px"}
            fontFamily={"normal"}
            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          >
            view transactions
          </Button>
        </HStack>

        {/*  notifications */}
        <VStack spacing={8} width={"100%"}>
          {mockNotifications.map((notification, idx) => (
            <Notification
              key={notification.id}
              notification={mockNotifications[idx]}
              icon={<BellIcon />}
              onClick={() => {}}
            />
          ))}
        </VStack>
        {/* revenue and expenses */}
        <SimpleGrid
          width={"100%"}
          minChildWidth="15vw"
          py={16}
          color={"primary"}
          spacing={{ base: 20, md: 12 }}
        >
          <GridItem>
            <VStack>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                TOTAL GROSS
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                REVENUES
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((2.7 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                $25.2K
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                TOTAL
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                EXPENSES{" "}
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((2.7 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                $20.2K
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                TOTAL NET
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                REVENUES
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((2.7 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                $5.0K
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                NUMBER OF
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                REVENUES
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((2.7 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                7
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                NUMBER OF
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((1.25 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                EXPENSES
              </Text>
              <Text
                fontFamily={"normal"}
                fontSize={"calc((2.7 - 1) * 1.2vw + 1rem)"}
                fontWeight={500}
                lineHeight={"40px"}
                letterSpacing={"0.02em"}
                textAlign={"center"}
              >
                97
              </Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
        {/* Your P&L by month*/}
        <VStack width={"100%"}>
          <Text
            alignSelf={"flex-start"}
            fontFamily={"normal"}
            color={"primary"}
            fontSize={"calc((1.5 - 1) * 1.2vw + 1rem)"}
            fontWeight={500}
            lineHeight={"40px"}
            letterSpacing={"0.02em"}
          >
            Your PnL by month
          </Text>
          {/* <LineChart /> */}
        </VStack>
        {/* Your top revenue sources */}
        <VStack width={"100%"}>
          <Text
            alignSelf={"flex-start"}
            fontFamily={"normal"}
            color={"primary"}
            fontSize={"calc((1.5 - 1) * 1.2vw + 1rem)"}
            fontWeight={500}
            lineHeight={"40px"}
            letterSpacing={"0.02em"}
          >
            Your top revenue sources
          </Text>
        </VStack>
        {/* Your top expense sources */}
        <VStack width={"100%"}>
          <Text
            alignSelf={"flex-start"}
            fontFamily={"normal"}
            color={"primary"}
            fontSize={"calc((1.5 - 1) * 1.2vw + 1rem)"}
            fontWeight={500}
            lineHeight={"40px"}
            letterSpacing={"0.02em"}
          >
            Your top expense sources
          </Text>
        </VStack>
        {/* Total expense spend splits by category */}
        <VStack width={"100%"}>
          <Text
            alignSelf={"flex-start"}
            fontFamily={"normal"}
            color={"primary"}
            fontSize={"calc((1.5 - 1) * 1.2vw + 1rem)"}
            fontWeight={500}
            lineHeight={"40px"}
            letterSpacing={"0.02em"}
          >
            Total expense spend splits by category
          </Text>
        </VStack>
      </VStack>
    </Layout>
  );
}
