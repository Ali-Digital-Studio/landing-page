"use client";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { AliStudioColors } from "#/src/utils/Colors";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { LuX } from "react-icons/lu";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("ali-banner");

  return showBanner ? (
    <Flex
      justify={"center"}
      h={"45px"}
      bg={"#000000"}
      w="100%"
      align={"center"}
    >
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color={AliStudioColors.white}
        fontWeight={700}
        mr={2}
      >
        ¡Haz brillar tu marca!
      </Text>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color={AliStudioColors.white}
      >
        Diseño que impacta, webs que inspiran...
      </Text>
      <Icon

        as={LuX}
        color={AliStudioColors.white}
        fontSize={"lg"}
        cursor={"pointer"}
        ml={2}
        onClick={() => {
          localStorage.setItem("ali-banner", "true");
          setShowBanner(false);
        }}
      >
        Close
      </Icon>
    </Flex>
  ) : null;
};

export default Banner;
