"use client"
import { useState, useEffect } from 'react';
import { AliStudioColors } from '#/src/utils/Colors';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Tooltip,
  VStack,
  Stack,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFacebook, BsLinkedin, BsPerson, BsInstagram } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const { hasCopied, onCopy } = useClipboard('alisocialmediard@gmail.com');
  const [state, handleSubmit] = useForm(process.env.FORMSPREE_KEY || '');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  return (
    <Flex
      bg={useColorModeValue('white', 'white')}
      align="center"
      justify="center"
      color={AliStudioColors.headingTextColor}
      id="contact"
    >
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Heading fontSize={{ base: '4xl', md: '5xl' }}>🚀 Trabajemos juntos, contáctanos ahora</Heading>

          <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
            <Stack align="center" justify="space-around" direction={{ base: 'row', md: 'column' }}>
              <Tooltip label={hasCopied ? 'Email Copiado!' : 'Copiar Email'} closeOnClick={false} hasArrow>
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<MdEmail />}
                  _hover={{ bg: 'blue.500', color: useColorModeValue('white', 'gray.700') }}
                  onClick={onCopy}
                  isRound
                />
              </Tooltip>

              <Box as="a" href="https://www.facebook.com/alistudiord">
                <IconButton
                  aria-label="Facebook"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsFacebook />}
                  _hover={{ bg: 'blue.500', color: useColorModeValue('white', 'gray.700') }}
                  isRound
                />
              </Box>

              <Box as="a" href="https://www.instagram.com/alistudiord/">
                <IconButton
                  aria-label="Instagram"
                  variant="ghost"
                  size="lg"
                  icon={<BsInstagram size="28px" />}
                  _hover={{ bg: 'blue.500', color: useColorModeValue('white', 'gray.700') }}
                  isRound
                />
              </Box>

              <Box as="a" href="https://www.linkedin.com/company/ali-studio-rd/">
                <IconButton
                  aria-label="LinkedIn"
                  variant="ghost"
                  size="lg"
                  icon={<BsLinkedin size="28px" />}
                  _hover={{ bg: 'blue.500', color: useColorModeValue('white', 'gray.700') }}
                  isRound
                />
              </Box>
            </Stack>

            {/* Formulario */}
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base"
            >
              <form onSubmit={(e) => {
                handleSubmit(e);
              }}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu Nombre"
                      />
                    </InputGroup>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Tu Correo Electrónico"
                      />
                    </InputGroup>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tu Mensaje"
                      rows={2}
                      resize="none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{ bg: 'blue.500' }}
                    width="full"
                    isLoading={state.submitting}
                  >
                    {state.succeeded ? 'Enviado ✔' : 'Enviar Mensaje'}
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Contact;
