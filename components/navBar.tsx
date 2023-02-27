import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Links = ["Join the waitlist", "Product", "Team"];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={`/${href.toLowerCase()}`}>
    <Text
      px={1}
      py={1}
      fontSize={{ base: "2.75rem", md: ".8rem" }}
      letterSpacing={".02rem"}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
    >
      {children}
    </Text>
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={6}
        bg={"secondary"}
        pt={1}
        pos={"fixed"}
        top={"0"}
        width={"100%"}
        data-testid="navbar"
        id={"navbar"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            _hover={{ bg: "secondary" }}
            bg={"secondary"}
            icon={
              isOpen ? (
                <CloseIcon
                  data-testid="close-icon"
                  fontSize={"md"}
                  fontWeight={"100"}
                  color={"primary"}
                  bg={"secondary"}
                />
              ) : (
                <HamburgerIcon
                  data-testid="hamburger-icon"
                  fontSize={"4xl"}
                  fontWeight={"100"}
                  color={"primary"}
                  bg={"secondary"}
                />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color={"primary"}
              data-testid="links"
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  href={link}
                  data-testid={`${link.toLocaleLowerCase()}-nav`}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Text
            data-testid="brand-name"
            p={"0"}
            alignSelf={"center"}
            color={"primary"}
            fontSize={"md"}
            mr={{ base: 28, md: 8 }}
          >
            drippi
          </Text>
          <Flex
            alignItems={"center"}
            // width={{ base: "100px", md: "252px" }}
            justifyContent={"flex-end"}
          >
            {/* <Button
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </Button> */}
            <Button
              background={"primary"}
              color={"black"}
              rounded={"full"}
              fontWeight={"400"}
              fontSize={"xs"}
              letterSpacing={"0.12rem"}
              _hover={{
                textDecoration: "none",
              }}
              width={"190px"}
              css={{ wordSpacing: "0.2rem" }}
              display={{ sm: "none", md: "inline-flex" }}
              alignItems={"center"}
              justifyContent={"center"}
              mr={2}
              data-testid="join-the-waitlist-button"
            >
              Join the waitlist
            </Button>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Flex
            borderBottom={"1px solid black"}
            pb={4}
            height={"100vh"}
            background={"secondary"}
            color={"primary"}
            display={{ md: "none" }}
            px={"14px"}
          >
            <Stack as={"nav"} spacing={4} py={"25vh"} data-testid="links">
              {Links.map((link) => {
                if (link !== "Join the waitlist") {
                  return (
                    <Box key={link}>
                      <NavLink
                        href={link}
                        data-testid={`${link.toLocaleLowerCase()}-nav`}
                      >
                        {link}
                      </NavLink>
                    </Box>
                  );
                }
              })}
            </Stack>
            {/* join the waitlist button */}
            <Button
              background={"primary"}
              color={"black"}
              rounded={"full"}
              fontWeight={"300"}
              fontSize={"md"}
              size={"lg"}
              letterSpacing={"0.14rem"}
              _hover={{
                textDecoration: "none",
              }}
              css={{ wordSpacing: "0.3rem" }}
              display={{ base: "inline-flex" }}
              alignItems={"center"}
              justifyContent={"center"}
              mr={"300px !important"}
              px={12}
              pos={"absolute"}
              bottom={"96px"}
              height="62px"
              width={"302px"}
              data-testid="join-the-waitlist-button"
            >
              Join the waitlist
            </Button>
          </Flex>
        ) : null}
      </Box>
    </>
  );
}
