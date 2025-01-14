"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { AliStudioColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";


const NavItems = [
  { name: "Servicios", href: "/#product" },
  { name: "Clientes", href: "/#clientes" },
  { name: "Portafolio", href: "/#portafolio" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("ali-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

      const sectionIDs = NavItems.map((item) => item.name.toLowerCase());

      const currentSection = sectionIDs.find((sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isSectionInView = top >= 0 && bottom <= window.innerHeight;
          return isSectionInView;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBanner]);

  return (
    <>
      <Flex
        position={isScrolled ? "fixed" : "absolute"}
        top={isScrolled ? 0 : "auto"}
        zIndex={100}
        bg={isScrolled ? "white" : "#ffffff25"}
        w="100%"
        justify="center"
        align="center"
        backdropFilter="blur(24px)"
        minH={75}
        transition="all .25s ease"
        borderBottom="1px solid #ffffff50"
        direction="column"
      >
        <Flex
          maxW={1440}
          w="100%"
          py={5}
          px={{ base: 10, xl: 5 }}
          align="center"
          justify="space-between"
        >
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 394.83 451.64"
            width="50"
            height="50"
            fill={isScrolled ? "#1d71b8" : "#ffffff"}
            transition="fill 0.25s ease"
          >
            <g id="Capa_1-2" data-name="Capa 1">
              <path d="m375.87,358.11c-10.47,0-18.96-8.49-18.96-18.96v-194.49c0-10.47,8.49-18.96,18.96-18.96s18.96,8.49,18.96,18.96v194.49c0,10.47-8.49,18.96-18.96,18.96Z" />
              <path d="m18.95,451.64c-3.03,0-6.11-.73-8.96-2.27-9.22-4.96-12.68-16.46-7.72-25.68L224.76,9.98c4.12-7.65,12.9-11.53,21.33-9.41,8.43,2.12,14.33,9.7,14.33,18.39v320.19c0,10.47-8.49,18.96-18.96,18.96s-18.96-8.49-18.96-18.96V94.25L35.67,441.65c-3.42,6.37-9.96,9.98-16.72,9.98Z" />
              <path d="m307.98,358.12c-1.71,0-3.44-.23-5.16-.72-9.6-2.71-15.38-12.35-13.44-21.97,1.89-17.48.78-202.76-.37-316.27-.11-10.47,8.3-19.05,18.77-19.15.07,0,.13,0,.2,0,10.38,0,18.85,8.36,18.96,18.77,0,.77.79,78.22,1.18,156.03.8,159.99-.69,165.27-1.89,169.5-2.36,8.36-9.96,13.81-18.24,13.81Zm-18.26-24.12s0,.02,0,.03c0,0,0-.02,0-.03Z" />
              <path d="m375.87,115.56c-10.47,0-18.96-8.49-18.96-18.96v-8.72c0-10.47,8.49-18.96,18.96-18.96s18.96,8.49,18.96,18.96v8.72c0,10.47-8.49,18.96-18.96,18.96Z" />
            </g>
          </Box>

          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={isScrolled ? "black" : "white"}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                px={5}
                py={2}
                borderRadius={12}
                transition="all .25s ease"
                color={isScrolled ? AliStudioColors.headingTextColor : AliStudioColors.white}
                _hover={{ bg: isScrolled ? AliStudioColors.primary : "#ffffff25", color: isScrolled ? AliStudioColors.white : "" }}
                bg={
                  activeSection === item.name.toLowerCase()
                    ? isScrolled
                      ? AliStudioColors.white
                      : "#ffffff25"
                    : "transparent"
                }
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
          </Flex>

          <IconButton
            icon={isOpen ? <Icon as={LuX} /> : <Icon as={LuMenu} />}
            aria-label="Hamburger menu"
            variant="unstyled"
            onClick={onToggle}
            color={isScrolled ? "black" : "white"}
            display={{ base: "flex", lg: "none" }}
            fontSize={"lg"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            zIndex={10000}
            w="100%"
            justify="center"
            align="center"
            display={{ base: "flex", md: "none" }}
            direction="column"
            mb={5}
            gap={5}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                color={isScrolled ? "black" : "white"}
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;