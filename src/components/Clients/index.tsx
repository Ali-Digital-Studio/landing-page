"use client";

import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading } from "@chakra-ui/react";
import Sliders from "../Sliders";
import { ClientImages } from "../../utils/ClientImages";
import { AliStudioColors } from "#/src/utils/Colors";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Clients() {
  return (
    <Box textAlign="center" mt={-10} id="clientes">
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        color={AliStudioColors.headingTextColor}
        margin={20}
      >
        Nuestros clientes
      </Heading>
      <Box style={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1200: { slidesPerView: 8 },
          }}
          loop={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiper.el.addEventListener("mouseenter", () => {
              swiper.autoplay.stop();
            });
            swiper.el.addEventListener("mouseleave", () => {
              swiper.autoplay.start();
            });
          }}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {ClientImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Sliders src={src} alt={`Logo ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}