"use client";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const words = [
  "Identidad",
  "Pagina Web",
  "Branding",
  "Diseño gráfico",
  "Publicidad",
  "Redes sociales",
  "Desarrollo web",
  "Posicionamiento",
  "Marketing",
  "UX/UI",
  "Fotografía",
];


const MotionFlex = motion.create(Flex);
const MotionHeading = motion.create(Heading);

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      minH="100svh"
      bg={
        "linear-gradient(120deg,#70A4D4 0%,#0A41BB 20%,#1D71BB 30%,#48B9E6 50%,#1D71BB 70%,#1DA3BB 100%)"
      }
      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
    >
      <Flex bg={"#ffffff50"} px={4} rounded={"full"} mb={5}>
        <Text color={StargateColors.white} fontSize={"xs"}>
          Da un salto a la modernidad con Ali Studio
        </Text>
      </Flex>
      <Heading
        fontSize={{
          sm: 18,
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign={"center"}
      >
        Nos Encargamos de tu
      </Heading>
      <AnimatePresence mode="wait">
        <MotionHeading
          fontSize={{
            sm:18,
            base: 48,
            md: 64,
            lg: 84,
          }}
          key={currentWord}
          color={StargateColors.white}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
        >
          {currentWord}
        </MotionHeading>
      </AnimatePresence>
      <Text color={StargateColors.white} maxW={300} textAlign={"center"} mt={5}>
        Diseñamos soluciones visuales, paginas web y social media para que conectes con el mundo
      </Text>
      <motion.a href={"#footer"} whileHover={{ scale: 1.1 }}>
        <Button
          size={"lg"}
          mt={5}
          gap={2}
          cursor={"pointer"}
        >
          ¡Contáctanos!
        </Button>
      </motion.a>
      <Link href={"#features"} passHref>
        <Text
          mt={2}
          color={StargateColors.white}
          opacity={0.75}
          transition={"all .25s ease"}
          _hover={{ opacity: 1 }}
        >
          Descubre Ali Studio
        </Text>
      </Link>
      <HeroBottomSVG />
    </MotionFlex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }

  to {
    background-position: 100% 100%
  }
`;

export default Header;
