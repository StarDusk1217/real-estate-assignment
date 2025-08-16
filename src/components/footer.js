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
      w={{ base: 8, md: 10 }} // smaller on mobile, larger on desktop
      h={{ base: 8, md: 10 }}
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: "whiteAlpha.300",
      }}
      color="white"
      fontSize={{ base: "xl", md: "2xl" }} // icon size responsive
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="black" color="white" py={8}>
      <Container maxW="6xl">
        <VStack spacing={6}>
          {/* Social Icons */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 4, sm: 6 }}
            align="center"
            justify="center"
            w="full"
          >
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

          {/* Footer Text */}
          <Text
            textAlign={{ base: "center", sm: "center" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            © 2025 Marci METZGER Homes. All rights reserved
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
