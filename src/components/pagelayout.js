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
      >
        {/* HEADER / NAVBAR */}
        <Flex
          h={{ base: "15vh", md: "12vh", lg: "10vh" }}
          w="100%"
          align="center"
          justify="space-between"
          px={{ base: 2, md: 4, lg: 6 }}
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            marginStart={100}
            marginTop={5}
          >
            <Image
              src="/assets/logo.jpeg"
              alt="POS System Logo"
              width={{ base: "120px", md: "250px", lg: "350px" }} // mobile, tablet, desktop
              height="auto"
              objectFit="contain"
            />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "flex-end" }}
            mt={{ base: 2, md: 5 }}
            mr={{ base: 2, md: 100 }}
          >
            <HStack spacing={{ base: 4, md: 6 }} wrap="wrap">
              <Text
                fontFamily="'Cinzel', serif"
                fontSize={{ base: "md", md: "2xl" }}
                fontWeight="thin"
                cursor="pointer"
                _hover={{ color: "gray.500" }} // optional hover effect
              >
                HOME
              </Text>
              <Text
                fontFamily="'Cinzel', serif"
                fontSize={{ base: "md", md: "2xl" }}
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "gray.500" }}
              >
                LISTINGS
              </Text>
              <Text
                fontFamily="'Cinzel', serif"
                fontSize={{ base: "md", md: "2xl" }}
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "gray.500" }}
              >
                {"LET'S MOVE"}
              </Text>
              <Text
                fontFamily="'Cinzel', serif"
                fontSize={{ base: "md", md: "2xl" }}
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "gray.500" }}
              >
                ABOUT US
              </Text>
            </HStack>
          </Flex>
        </Flex>

        {/* MAIN CONTENT AREA */}
        <VStack
          width={{ base: "90%", md: "95%", lg: "100%" }}
          bg="#FFFFFF"
          flex="1"
          mt={5}
          align="stretch"
          spacing={0}
          mx="auto" // centers content horizontally
        >
          {children}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
