import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  Image,
  HStack,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

export default function Pagelayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navItems = ["HOME", "LISTINGS", "LET'S MOVE", "ABOUT US"];

  return (
    <ChakraProvider>
      <Box
        minH="150vh"
        bg="#FFFFFF"
        display="flex"
        flexDirection="column"
        maxW="2000px"
        mx="auto"
      >
        {/* HEADER / NAVBAR */}
        <Flex
          h={{ base: "15vh", md: "12vh", lg: "10vh" }}
          w="100%"
          color="black"
          align="center"
          justify="space-between"
          px={{ base: 4, md: 8, lg: 16 }}
        >
          {/* Logo */}
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Image
              src="/assets/logo.jpeg"
              alt="POS System Logo"
              width={{ base: "120px", md: "250px", lg: "350px" }}
              height="auto"
              objectFit="contain"
            />
          </Flex>

          {/* Desktop Navigation */}
          <HStack
            spacing={{ base: 0, md: 6 }}
            display={{ base: "none", md: "flex" }}
            textAlign="center"
          >
            {navItems.map((item, index) => (
              <Text
                key={index}
                fontFamily="'Cinzel', serif"
                fontSize={{ base: "md", md: "2xl" }}
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "gray.500" }}
              >
                {item}
              </Text>
            ))}
          </HStack>

          {/* Mobile Hamburger Button */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            size="lg"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />

          {/* Mobile Drawer */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack spacing={6} mt={10}>
                  {navItems.map((item, index) => (
                    <Text
                      key={index}
                      fontFamily="'Cinzel', serif"
                      fontSize="2xl"
                      fontWeight="medium"
                      cursor="pointer"
                      onClick={onClose} // closes drawer on click
                    >
                      {item}
                    </Text>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>

        {/* MAIN CONTENT AREA */}
        <VStack
          width={{ base: "100%", md: "100%", lg: "100%" }}
          bg="#FFFFFF"
          flex="1"
          mt={5}
          align="stretch"
          spacing={0}
          mx="auto"
        >
          {children}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
