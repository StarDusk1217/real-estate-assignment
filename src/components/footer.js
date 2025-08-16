import React from "react";
import {
  Box,
  chakra,
  Container,
  VStack,
  Text,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="whiteAlpha.100"
      rounded="full"
      w={10} // increased from 8
      h={10} // increased from 8
      cursor="pointer"
      as="a"
      href={href}
      target="_blank" // opens in a new tab
      rel="noopener noreferrer" // security best practice
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: "whiteAlpha.300",
      }}
      color="white"
      fontSize="2xl" // increase icon size
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="black" color="white" minH="200px" py={8}>
      <Container maxW="6xl">
        <VStack spacing={6}>
          <Stack direction="row" spacing={6}>
            <SocialButton
              label="Facebook"
              href="https://www.facebook.com/MarciHomes/"
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label="Instagram"
              href="https://www.instagram.com/marciandlauren_nvrealtors/"
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/marci-metzger-30642496/"
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label="Yelp"
              href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
            >
              <FaYelp />
            </SocialButton>
          </Stack>
          <Text>© 2025 Marci METZGER Homes. All rights reserved</Text>
        </VStack>
      </Container>
    </Box>
  );
}
