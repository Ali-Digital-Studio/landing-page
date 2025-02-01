"use client";
import { AliStudioColors } from "#/src/utils/Colors";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { Box, Grid, Link, Icon, VStack } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <Flex
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Box px={4} pt={16} mx="auto" maxW="7xl">
        <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={10} mb={8}>
          <Box gridColumn={{ sm: "span 2", lg: "span 2" }}>
            <Link href="/" aria-label="Go home" title="Ali Digital Agency" display="inline-flex" alignItems="center">
              <Image src="images/Logo.svg" alt="Logo" width={50} height={50} />
              <Text ml={2} fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase">
                Ali Studio | Agencia Digital Creativa
              </Text>
            </Link>
            <VStack spacing={4} mt={6} maxW="sm">
              <Text fontSize="sm" color="gray.300">
                Nuestro equipo de expertos en diseño, desarrollo y marketing digital trabaja en conjunto para llevar tu marca al siguiente nivel. Desde la estrategia hasta la ejecución, nos aseguramos de que cada proyecto sea único y refleje la esencia de tu negocio.
              </Text>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="base" fontWeight="bold" color="white">
              Contactos
            </Text>
            <VStack spacing={2} mt={2} fontSize="sm" align="start">
              <Text color="white">Telefono:</Text>
              <Link href="tel:+1(809)-488-5950" aria-label="Nuestro Telefono" title="Nuestro Telefono" color="gray.300" _hover={{ color: "purple.800" }}>
                +1 (809)-488-5950
              </Link>
              <Text color="white">Correo Electronico:</Text>
              <Link href="mailto:alisocialmediard@gmail.com" aria-label="Nuestro Email" title="Nuestro Email" color="gray.300" _hover={{ color: "purple.800" }}>
                alisocialmediard@gmail.com
              </Link>
              <Text color="white">Direccion:</Text>
              <Link href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Nuestra Direccion" title="Nuestra Direccion" color="gray.300" _hover={{ color: "purple.800" }}>
                Cutupu, La Vega Republica Dominicana
              </Link>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="base" fontWeight="bold" color="white">
              Redes Sociales
            </Text>
            <Flex mt={2} gap={3}>
              <Link href="/" color="white" _hover={{ color: "blue.300" }}>
                <Icon as={FaLinkedin} h={5} w={5} />
              </Link>
              <Link href="https://www.instagram.com/alistudiord" color="white" _hover={{ color: "orange.400" }}>
                <Icon as={FaInstagram} h={5} w={5} />
              </Link>
              <Link href="https://www.facebook.com/alistudiord" color="white" _hover={{ color: "blue.400" }}>
                <Icon as={FaFacebook} h={5} w={5} />
              </Link>
            </Flex>
            <Text mt={4} fontSize="sm" color="gray.300">
              Creemos en el poder de la creatividad y la innovación para impulsar resultados. Estamos aquí para ayudarte a destacar en el mundo digital y conectar con tu audiencia de manera auténtica y efectiva.
            </Text>
          </Box>
        </Grid>
        <Flex justify="space-between" pt={5} pb={10} borderTopWidth={1}>
          <Text fontSize="sm" color="white">
            © AliStudio {new Date().getFullYear()} - Todos los derechos reservados.
          </Text>
          <Flex>
            <Link href="/#product" fontSize="sm" color="white" _hover={{ color: "purple.400" }}>
              Servicios
            </Link>
            <Link href="/#clientes" ml={5} fontSize="sm" color="white" _hover={{ color: "purple.400" }}>
              Clientes
            </Link>
            <Link href="/#portafolio" ml={5} fontSize="sm" color="white" _hover={{ color: "purple.400" }}>
              Portafolio
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
