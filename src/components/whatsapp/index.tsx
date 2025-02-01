import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Box, Link } from '@chakra-ui/react';

const WhatsappLive = () => {
  const message = encodeURIComponent(
    "Hola AliStudio, me gustaría saber más sobre su agencia digital y los servicios que ofrecen."
  );
  const whatsappURL = `https://api.whatsapp.com/send?phone=18094885950&text=${message}`;

  return (
    <Link href={whatsappURL} isExternal _hover={{ textDecoration: 'none' }}>
      <Box
        position="fixed"
        bottom="4"
        right="4"
        bg="green.500"
        color="white"
        p="1"
        rounded="full"
        shadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="1000"
      >
        <FaWhatsapp size={40} />
      </Box>
    </Link>
  );
};

export default WhatsappLive;
