import handleJoinWaitlist from "@/utils/handleJoinWaitlist";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Z from "zod";

export function EmailInput() {
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const toast = useToast();

  const emailSchema = Z.string().email();
  const result = emailSchema.safeParse(email);

  return (
    <>
      {" "}
      <FormControl
        isRequired
        isInvalid={emailError !== ""}
        css={{
          textAlignLast: "left",
        }}
        pr={4}
        py={8}
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
          color={"black"}
          width={"100%"}
          maxW={"570px"}
          alignSelf={"flex-start"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>
      <Flex
        width={"100%"}
        height={"100%"}
        justify={"flex-start"}
        alignItems={"flex-start"}
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
          css={{
            wordSpacing: "0.2rem",
          }}
          display={{
            md: "inline-flex",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          mr={{
            base: 0,
            md: "32px !important",
          }}
          zIndex={1}
          p={".9em 1.503em"}
          height={"52px"}
          fontFamily={"light"}
          data-testid="join-the-waitlist-button"
          onClick={async () => {
            if (!result.success) {
              setEmailError(result.error.issues[0]?.message);
              return;
            }
            setEmailError("");
            const res = await handleJoinWaitlist(email);
            if (res.status === 200) {
              toast({
                title: "Success!",
                description: "You have been added to the waitlist.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Error!",
                description: "Something went wrong. Please try again.",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          }}
        >
          Sign up
        </Button>
      </Flex>
    </>
  );
}
