"use client";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Box textAlign="center" py={10}>
            <Heading as="h2" size="xl" mb={4}>
                Nuestros clientes
            </Heading>
            <Box style={{ position: 'relative' }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        boxSizing: 'border-box',
                    }}
                >
                    <SwiperSlide>
                        Slide 1
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide 2
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide 3
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide 4
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide 5
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};
