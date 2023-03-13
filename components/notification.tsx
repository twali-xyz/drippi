import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";

export default function Notification({
  notification,
  icon,
  onClick,
}: {
  notification: {
    id: string;
    title: string;
    read: boolean;
  };
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button
      key={notification.id}
      width={"100%"}
      height={"84px"}
      position={"relative"}
      left={notification.read ? "-100vw" : "0px"}
      fontFamily={"PP Telegraf"}
      fontWeight={"500"}
      transition={"left 1s"}
      textTransform={"none"}
      background={"primary"}
      borderRadius={"8px"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      onClick={onClick}
      p={8}
      justifyContent={"space-between"}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text
        color={"black"}
        opacity={"0.8"}
        fontSize={"calc((1.5 - 1) * 1.2vw + 1rem)"}
      >
        {notification.title}
      </Text>
      <Icon color={"secondary"}>{icon}</Icon>
    </Button>
  );
}
