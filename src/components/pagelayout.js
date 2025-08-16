import React from "react";
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

export default function Pagelayout({ children }) {
  const cancelRef = React.useRef();

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

          {/* Navigation */}
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "flex-end" }}>
            <HStack spacing={{ base: 3, md: 6 }} wrap="wrap" textAlign="center">
              {["HOME", "LISTINGS", "LET'S MOVE", "ABOUT US"].map(
                (item, index) => (
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
                )
              )}
            </HStack>
          </Flex>
        </Flex>

        {/* MAIN CONTENT AREA */}
        <VStack
          width={{ base: "80%", md: "90%", lg: "100%" }}
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
