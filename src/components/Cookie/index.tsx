"use client";
import { AliStudioColors } from "#/src/utils/Colors";
import useCookieVisibility from "#/src/utils/CookieVisibility";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Cookie: FC = () => {
  const [showCookie, setShowCookie] = useCookieVisibility("ali-cookie");

  return showCookie ? (
    <Flex
      bg={AliStudioColors.white}
      shadow={"lg"}
      rounded={"full"}
      padding={"8px 8px 8px 16px"}
      position={"fixed"}
      left={"50%"}
      bottom={8}
      transform={"translateX(-50%)"}
      justify={{
        base: "space-between",
        lg: "center",
      }}
      align={"center"}
      gap={8}
      w={{
        base: "90%",
        md: "75%",
        lg: "auto",
      }}
      zIndex={1000}
    >
      <Text color={AliStudioColors.grey} fontSize={"small"}>
      Este sitio web utiliza cookies para mejorar su experiencia.
      </Text>
      <Button
        rounded={"full"}
        fontSize={"small"}
        size={"sm"}
        bg={AliStudioColors.black}
        color={AliStudioColors.white}
        _hover={{
          opacity: 0.8,
        }}
        px={5}
        onClick={() => {
          localStorage.setItem("ali-cookie", "true");
          setShowCookie(false);
        }}
      >
        Accept
      </Button>
    </Flex>
  ) : null;
};

export default Cookie;
