import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { FaLightbulb, FaPaintBrush, FaBook } from "react-icons/fa"; 

const Design = () => {
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
      <ProductCard icon={FaLightbulb} title={"Concepto y Estrategia"}>
        Diseñamos una identidad para que refleje los valores y misión de tu marca,
        analizando e investigando tu mercado y tu público objetivo, ofreciendo una
        identidad alineada con las
      </ProductCard>

      <ProductCard icon={FaPaintBrush} title={"Logotipos Originales"}>
        Diseños impactantes y memorables que trasmiten la esencia de la marca, con
        logotipos optimizados para múltiples plataformas.
      </ProductCard>

      <ProductCard icon={FaBook} title={"Paleta de colores y Brandbook"}>
        Colores que refuerzan la percepción de la marca, incluyendo un documento
        que define cómo utilizar tu marca en todos los canales, asegurando su
        consistencia.
      </ProductCard>
    </Grid>
  );
};

export default Design;
