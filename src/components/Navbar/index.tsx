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
import {  motion } from "framer-motion";
import { AliStudioColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";

const NavItems = [
  { name: "Features", href: "/#features" },
  { name: "Product", href: "/#product" },
  { name: "Pricing", href: "/#pricing" },
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
          <Text
            as={Link}
            href="/"
            fontSize="3xl"
            userSelect="none"
            color={isScrolled ? AliStudioColors.headingTextColor : "white"}
            fontWeight={600}
          >
            Stargate
          </Text>
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
                _hover={{ bg: isScrolled ? AliStudioColors.primary : "#ffffff25", color: isScrolled ? AliStudioColors.white : ""}}
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

          <Flex gap={4} display={{ base: "none", lg: "flex" }}>
            <Button variant="link" color={isScrolled ? AliStudioColors.headingTextColor : AliStudioColors.white}>
              Log in
            </Button>
            <Button
              as={motion.a}
              whileHover={{ scale: 1.1 }}
              href="#footer"
              rounded="full"
              background={isScrolled ? AliStudioColors.primary : "white"}
              color={isScrolled ? AliStudioColors.white : AliStudioColors.headingTextColor}
              _hover={{ bg: isScrolled ? AliStudioColors.primary : "white" }}
            >
              Start for free
            </Button>
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
            <Flex gap={5} mt={5}>
              <Button variant="link" color={isScrolled ? "black" : "white"}>
                Log in
              </Button>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                href="#"
                rounded="full"
                background={isScrolled ? AliStudioColors.primary : "white"}
                color={isScrolled ? "white" : "black"}
              >
                Start for free
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
