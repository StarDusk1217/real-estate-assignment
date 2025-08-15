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

export default function pagelayout({ children }) {
  const cancelRef = React.useRef();

  return (
    <ChakraProvider>
      <Box minH="150vh" bg="#FFFFFF" display="flex" flexDirection="column">
        {/* HEADER / NAVBAR */}
        <Flex
          h={{ base: "12vh", md: "10vh" }}
          w="100%"
          color="Black"
          align="center"
          position="relative"
          zIndex={1}
          justifyContent="space-between"
          px={{ base: 2, md: 4 }}
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
              width={{ base: "150px", md: "350px" }}
              height="auto"
              objectFit="contain"
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: 1 }}
            justify={"flex-end"}
            marginTop={5}
            marginRight={100}
          >
            <HStack spacing={6}>
              <Text
                fontFamily="Source Sans Pro"
                fontSize={20}
                fontWeight="medium"
              >
                HOME
              </Text>
              <Text
                fontFamily="Source Sans Pro"
                fontSize={20}
                fontWeight="medium"
              >
                LISTINGS
              </Text>
              <Text
                fontFamily="Source Sans Pro"
                fontSize={20}
                fontWeight="medium"
              >
                LET'S MOVE
              </Text>
              <Text
                fontFamily="Source Sans Pro"
                fontSize={20}
                fontWeight="medium"
              >
                ABOUT US
              </Text>
            </HStack>
          </Flex>
        </Flex>

        {/* MAIN CONTENT AREA */}
        <VStack
          width="100%"
          bg="#FFFFFF"
          flex="1"
          marginTop={5}
          align="stretch"
          spacing={0}
        >
          {children}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
