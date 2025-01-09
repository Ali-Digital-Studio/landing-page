import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuUserCheck, LuDices, LuWrench } from "react-icons/lu";

const Development = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuUserCheck} title={"Centrados en el usuario"}>
        Interfaces atractivas orientadas a mejorar la experiencia de usuario
      </ProductCard>

      <ProductCard icon={LuDices} title={"Desarrollo Responsivo"}>
        Páginas que se ven y funcionan desde cualquier dispositivo, con un 
        diseño complementario que se centra en la experiencia de los usuarios
        que navegan desde smartphones.
      </ProductCard>

      <ProductCard icon={LuWrench} title={"Mantenimiento y actualizaciones"}>
        Aseguramos que tu página siempre esté actualizada y funcionando de forma 
        perfecta, en caso de que necesites capacitación extra para administrar tu
        sitio acá la encontrarás.
      </ProductCard>
    </Grid>
  );
};

export default Development;
