import React, { useState, useEffect } from "react";
import PageLayout from "../components/pagelayout";
import {
  Box,
  Image,
  IconButton,
  Text,
  VStack,
  Flex,
  Select,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

function Index() {
  const slides = [
    {
      src: "/assets/image2.jpeg",
      title: "MARCI METZGER - THE RIDGE REALTY GROUP",
      subtitle: "Pahrump Realtor",
      textPosition: "center", // center for image2
    },
    {
      src: "/assets/images3.png",
      title: "Top Residential Sales Last 5 Years",
      paragraph:
        "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
      textPosition: "left", // left for image3
    },
    {
      src: "/assets/images4.jpg",
      title: "Don't Just List it...",
      paragraph:
        "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
      textPosition: "right", // right for image4
    },
    {
      src: "/assets/images5.png",
      title: "Guide to Buyers",
      paragraph:
        "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
      textPosition: "left", // left for image5
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 15000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <PageLayout>
      <Box
        position="relative"
        maxW="2000px"
        w="100%"
        h="750px"
        role="group"
        overflow="hidden"
        m={0}
      >
        <AnimatePresence>
          <MotionBox
            key={index}
            position="absolute"
            w="100%"
            h="100%"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <Image
              src={slides[index].src}
              alt={`Slide ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
            />

            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="rgba(0,0,0,0.4)"
            />

            {/* Animated Text */}
            {(slides[index].title ||
              slides[index].subtitle ||
              slides[index].paragraph) && (
              <AnimatePresence>
                <MotionVStack
                  key={slides[index].title}
                  position="absolute"
                  top="50%"
                  left={
                    slides[index].textPosition === "center"
                      ? "30%"
                      : slides[index].textPosition === "left"
                      ? "15%"
                      : "auto"
                  }
                  right={
                    slides[index].textPosition === "right" ? "15%" : "auto"
                  }
                  transform={
                    slides[index].textPosition === "center"
                      ? "translate(-50%, -50%)"
                      : "translateY(-50%)"
                  }
                  alignItems={
                    slides[index].textPosition === "center"
                      ? "center"
                      : slides[index].textPosition === "left"
                      ? "flex-start"
                      : "flex-end"
                  }
                  spacing={4}
                  textAlign={
                    slides[index].textPosition === "center"
                      ? "center"
                      : slides[index].textPosition === "left"
                      ? "left"
                      : "right"
                  }
                  color="white"
                  fontFamily="'Cinzel', serif"
                  maxW="80%"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slides[index].title && (
                    <Text fontSize={35}>{slides[index].title}</Text>
                  )}
                  {slides[index].subtitle && (
                    <Text fontSize={50}>{slides[index].subtitle}</Text>
                  )}
                  {slides[index].paragraph && (
                    <Text fontSize={25} maxW="900px">
                      {slides[index].paragraph}
                    </Text>
                  )}
                </MotionVStack>
              </AnimatePresence>
            )}
          </MotionBox>
        </AnimatePresence>

        {/* Left Arrow */}
        <IconButton
          icon={<ChevronLeftIcon />}
          position="absolute"
          top="50%"
          left="20px"
          transform="translateY(-50%)"
          onClick={prevSlide}
          aria-label="Previous Slide"
          zIndex={1}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          bg="rgba(0,0,0,0.5)"
          color="white"
          _hover={{ bg: "rgba(0,0,0,0.7)" }}
        />

        {/* Right Arrow */}
        <IconButton
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right="20px"
          transform="translateY(-50%)"
          onClick={nextSlide}
          aria-label="Next Slide"
          zIndex={1}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          bg="rgba(0,0,0,0.5)"
          color="white"
          _hover={{ bg: "rgba(0,0,0,0.7)" }}
        />
      </Box>
      <Flex w="100%" h="550px">
        <Box
          w="65%"
          bg="gray.100"
          align="center"
          justify="center"
          position="relative"
          background="white"
        >
          {/* Background Image */}
          <Image
            src="/assets/images6.png"
            width="100%"
            h="100%"
            objectFit="cover"
            alt="Left Side Image"
          />

          {/* Dark Grey Overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)"
          />

          {/* Text Above White Box */}
          <Box
            position="absolute"
            top="10%" // adjust vertical position
            left="50%"
            transform="translateX(-50%)"
            zIndex={2}
          >
            <Text
              fontFamily="'Cinzel', serif"
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              FIND YOUR DREAM HOME
            </Text>
          </Box>

          {/* White Center Box */}
          <Box
            position="absolute"
            top="60%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            p={8}
            minW="1000px"
            minH="350px"
            borderRadius="md"
            boxShadow="lg"
            zIndex={3}
          >
            {/* SEARCH LISTINGS Text */}
            <Text
              fontFamily="'Cinzel', serif"
              fontSize="xl"
              fontWeight="bold"
              color="#a68786"
              textAlign="left"
              mb={6} // spacing below
            >
              SEARCH LISTINGS
            </Text>

            {/* Form Fields */}
            <Flex gap={8} marginBottom={10}>
              {/* Location */}
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Location</Text>
                <Select size="lg" w="300px" fontSize="lg"></Select>
              </VStack>

              {/* Type */}
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Type</Text>
                <Select size="lg" w="300px" fontSize="lg">
                  <option value=""></option>
                </Select>
              </VStack>

              {/* Sort By */}
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Sort By</Text>
                <Select size="lg" w="300px" fontSize="lg">
                  <option value=""></option>
                </Select>
              </VStack>
            </Flex>
            <HStack gap={8}>
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Bedrooms</Text>
                <Select size="lg" w="130px" fontSize="lg">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </VStack>
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Baths</Text>
                <Select size="lg" w="130px" fontSize="lg">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </VStack>
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Min Price</Text>
                <Input w="140px" variant="flushed" />
              </VStack>
              <VStack align="start" w="1/3">
                <Text fontWeight="medium">Max Price</Text>
                <Input w="140px" variant="flushed" />
              </VStack>
              <VStack align="start" w="1/3">
                <Button
                  w="300px" // makes the button take full width of the VStack
                  h="60px" // increase height if desired
                  borderRadius="30px" // medium rounded corners
                  colorScheme="teal" // optional color
                  fontSize="lg" // larger text
                >
                  SEARCH NOW
                </Button>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Side (25%) */}
        <Box
          w="35%"
          bg="#161616"
          p={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="'Cinzel', serif" // All text in Cinzel
        >
          <VStack alignItems="center" justifyContent="center">
            <Text color="white" mb={4} textAlign="center" fontSize={25}>
              MARCI METZGER
            </Text>

            <Image
              src="/assets/marci.png"
              boxSize="300px" // Equal width & height for a circle
              objectFit="cover" // Fill the shape without distortion
              borderRadius="full" // Makes it a perfect circle
              alt="Marci Metzger"
            />

            <Text color="white" mb={4} textAlign="center" fontSize={20}>
              REALTOR FOR NEARLY 3 DECADES!
            </Text>

            <Text color="white" mb={0} textAlign="center" fontSize={20}>
              206-919-6886
            </Text>
          </VStack>
        </Box>
      </Flex>
    </PageLayout>
  );
}

export default Index;
