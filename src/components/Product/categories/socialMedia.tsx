import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuImage, LuTarget, LuCalendarDays } from "react-icons/lu";

const SocialMedia = () => {
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
      <ProductCard icon={LuImage} title={"Creación de contenido"}>
        Creamos diseños visuales impactantes como post, historias y reels estructurados
        para captar la atención y reflejar tu marca, con la más alta calidad.
      </ProductCard>

      <ProductCard icon={LuTarget} title={"Estrategia de redes sociales"}>
        Evaluamos tu audiencia, competencia y objetivos para crear un plan de acción con
        publicaciones planificadas estratégicamente para mantener coherencia y relevancia.
      </ProductCard>

      <ProductCard icon={LuCalendarDays} title={"Gestión de redes sociales"}>
        Cuidamos el día y la hora ideal para maximizar el alcance, con análisis continuo 
        del contenido, creación de campañas personalizadas con una segmentación precisa para
        llegar al público adecuado por medio de Facebook ADS y Google ADS.
      </ProductCard>
    </Grid>
  );
};

export default SocialMedia;
