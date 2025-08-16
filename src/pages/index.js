import React, { useState, useEffect, useCallback } from "react";
import PageLayout from "../components/pagelayout";
import Footer from "../components/footer";
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
  chakra,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import next from "next";

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

  const Label = chakra("label", {
    baseStyle: {
      position: "absolute",
      bg: "white",
      px: 2,
      top: "12px",
      left: 3,
      fontWeight: "normal",
      pointerEvents: "none",
      transition: "all 0.2s ease",
      _peerPlaceholderShown: {
        color: "black",
        top: "12px",
        left: 3,
        fontSize: "md",
      },
      _peerFocus: {
        color: "black",
        top: "-8px",
        left: 2,
        fontSize: "sm",
      },
    },
  });

  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photoList = [
    "/assets/photo1.png",
    "/assets/photo2.png",
    "/assets/photo3.png",
    "/assets/photo4.png",
    "/assets/photo5.png",
    "/assets/photo6.png",
    "/assets/photo7.png",
  ];

  const getX = (position) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return position * 180; // mobile
      if (window.innerWidth < 1024) return position * 200; // tablet
    }
    return position * 220; // desktop
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % 7); // total 7 photos
    }, 6000); // rotates every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <PageLayout>
      <Box
        position="relative"
        maxW="2000px"
        w="100%"
        h={{ base: "400px", md: "600px", lg: "750px" }} // responsive height
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
            <Image
              src={slides[index].src}
              alt={`Slide ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="rgba(0,0,0,0.4)"
            />
            {(slides[index].title ||
              slides[index].subtitle ||
              slides[index].paragraph) && (
              <AnimatePresence>
                <MotionVStack
                  key={slides[index].title}
                  position="absolute"
                  top={{ base: "40%", md: "50%" }} // moves up slightly on mobile
                  left={{
                    base: "10%",
                    md:
                      slides[index].textPosition === "center"
                        ? "30%"
                        : slides[index].textPosition === "left"
                        ? "15%"
                        : "auto",
                  }}
                  right={{
                    base: "10%",
                    md: slides[index].textPosition === "right" ? "15%" : "auto",
                  }}
                  transform={{
                    base: "translate(-50%, -50%)",
                    md:
                      slides[index].textPosition === "center"
                        ? "translate(-50%, -50%)"
                        : "translateY(-50%)",
                  }}
                  alignItems={{
                    base: "center",
                    md:
                      slides[index].textPosition === "center"
                        ? "center"
                        : slides[index].textPosition === "left"
                        ? "flex-start"
                        : "flex-end",
                  }}
                  spacing={4}
                  textAlign={{
                    base: "center",
                    md:
                      slides[index].textPosition === "center"
                        ? "center"
                        : slides[index].textPosition === "left"
                        ? "left"
                        : "right",
                  }}
                  color="white"
                  fontFamily="'Cinzel', serif"
                  maxW={{ base: "90%", md: "80%" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slides[index].title && (
                    <Text fontSize={{ base: "20px", md: 35 }}>
                      {slides[index].title}
                    </Text>
                  )}
                  {slides[index].subtitle && (
                    <Text fontSize={{ base: "28px", md: 50 }}>
                      {slides[index].subtitle}
                    </Text>
                  )}
                  {slides[index].paragraph && (
                    <Text
                      fontSize={{ base: "16px", md: 25 }}
                      maxW={{ base: "300px", md: "900px" }}
                      fontFamily="'Source Sans Pro', sans-serif"
                      textTransform="none"
                    >
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
          left={{ base: "5px", md: "20px" }}
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
          size={{ base: "sm", md: "md" }}
        />

        {/* Right Arrow */}
        <IconButton
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right={{ base: "5px", md: "20px" }}
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
          size={{ base: "sm", md: "md" }}
        />

        {/* Indicators */}
        <HStack
          spacing={{ base: 2, md: 4 }}
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={2}
        >
          {slides.map((_, idx) => (
            <Box
              key={idx}
              w={
                idx === index
                  ? { base: "8px", md: "10px" }
                  : { base: "6px", md: "8px" }
              }
              h={
                idx === index
                  ? { base: "8px", md: "10px" }
                  : { base: "6px", md: "8px" }
              }
              borderRadius="full"
              bg={idx === index ? "white" : "gray.400"}
              cursor="pointer"
              onClick={() => setIndex(idx)}
              transition="all 0.3s"
            />
          ))}
        </HStack>
      </Box>

      <Flex
        w="100%"
        minH={{ base: "auto", md: "550px" }}
        align="center"
        justify="center"
        px={{ base: 4, md: 8, lg: 16 }}
        py={{ base: 8, md: 12, lg: 0 }}
      >
        <Box w={{ base: "100%", md: "80%", lg: "60%" }} position="relative">
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "30px" }}
            textAlign="left"
            fontWeight="bold"
            fontFamily="'Cinzel', serif"
            mb={{ base: 4, md: 6 }}
          >
            ABOUT
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 12, lg: 20 }}
            align="center"
          >
            {/* Text Content */}
            <VStack
              spacing={{ base: 4, md: 6, lg: 6 }}
              align="flex-start"
              w={{ base: "100%", md: "50%" }}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                fontWeight="bold"
                fontFamily="'Cinzel', serif"
              >
                Marci J Metzger
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontFamily="'Source Sans Pro', sans-serif"
              >
                Marci was a REALTOR, then licensed Broker, in Washington State.
                Now, she is enjoying the sunshine, and helping clients in
                Southern Nevada. Having helped buyers and sellers in many
                markets since 1995, she is a wealth of knowledge.
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                fontWeight="bold"
                fontFamily="'Cinzel', serif"
              >
                In Her Words
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontFamily="'Source Sans Pro', sans-serif"
              >
                &quot;I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there&apos;s a place
                for you here! I enjoy living in the Mountain Falls community and
                will strive to find you a home that will suit you just as this
                community does me.&quot;
              </Text>
            </VStack>

            {/* Image */}
            <Box
              w={{ base: "100%", md: "50%" }}
              display="flex"
              justifyContent={{ base: "center", md: "flex-end" }}
            >
              <Image
                src="/assets/about.png"
                maxW={{ base: "80%", md: "70%", lg: "100%" }}
                h="auto"
                alt="about"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        w="100%"
        direction={{ base: "column", md: "row" }} // stack on mobile/tablet, side-by-side on desktop
        h={{ base: "auto", md: "550px" }}
      >
        {/* Left Side */}
        <Box
          w={{ base: "100%", md: "65%" }}
          position="relative"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Background Image */}
          <Image
            src="/assets/images6.png"
            width="100%"
            h={{ base: "300px", md: "550px" }}
            objectFit="cover"
            alt="Left Side Image"
          />
          {/* Dark Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="rgba(0,0,0,0.5)"
          />
          {/* Text */}
          <Box
            position="absolute"
            top={{ base: "30%", md: "10%" }}
            left="50%"
            transform="translateX(-50%)"
            zIndex={2}
          >
            <Text
              fontFamily="'Cinzel', serif"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              FIND YOUR DREAM HOME
            </Text>
          </Box>

          {/* Explore Button for Mobile & Tablet */}
          {!showForm && (
            <Button
              display={{ base: "block", md: "block", lg: "none" }}
              position="absolute"
              top={{ base: "60%", md: "65%" }}
              left="50%"
              transform="translateX(-50%)"
              zIndex={2}
              colorScheme="teal"
              size="lg"
              onClick={() => setShowForm(true)}
            >
              Explore
            </Button>
          )}

          {/* Search Form */}
          <Box
            display={{ base: showForm ? "block" : "none", lg: "block" }}
            position="absolute"
            top={{ base: "70%", md: "60%", lg: "60%" }}
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            p={{ base: 4, md: 6, lg: 8 }}
            w={{ base: "90%", md: "80%", lg: "1000px" }}
            minH={{ base: "auto", md: "350px", lg: "350px" }}
            borderRadius="md"
            boxShadow="lg"
            zIndex={3}
          >
            {/* Close Button for Mobile & Tablet */}
            {showForm && (
              <Button
                display={{ base: "block", md: "block", lg: "none" }}
                position="absolute"
                top={2}
                right={2}
                size="sm"
                bg="white"
                onClick={() => setShowForm(false)}
              >
                X
              </Button>
            )}
            <Text
              fontFamily="'Cinzel', serif"
              fontSize={{ base: "lg", md: "xl", lg: "xl" }}
              fontWeight="bold"
              color="#a68786"
              textAlign="left"
              mb={{ base: 4, md: 6, lg: 6 }}
            >
              SEARCH LISTINGS
            </Text>

            {/* Form Fields */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 8 }}
              mb={{ base: 4, md: 10 }}
              flexWrap="wrap"
            >
              <VStack align="start" w={{ base: "100%", md: "30%" }}>
                <Text fontWeight="medium">Location</Text>
                <Select
                  size="lg"
                  w={{ base: "100%", md: "300px", lg: "300px" }}
                  fontSize="lg"
                />
              </VStack>
              <VStack align="start" w={{ base: "100%", md: "30%" }}>
                <Text fontWeight="medium">Type</Text>
                <Select
                  size="lg"
                  w={{ base: "100%", md: "300px", lg: "300px" }}
                  fontSize="lg"
                >
                  <option value=""></option>
                </Select>
              </VStack>
              <VStack align="start" w={{ base: "100%", md: "30%" }}>
                <Text fontWeight="medium">Sort By</Text>
                <Select
                  size="lg"
                  w={{ base: "100%", md: "300px", lg: "300px" }}
                  fontSize="lg"
                >
                  <option value=""></option>
                </Select>
              </VStack>
            </Flex>

            <HStack
              spacing={{ base: 4, md: 8 }}
              wrap={{ base: "wrap", md: "nowrap" }}
            >
              {/* Bedrooms */}
              <VStack
                align="start"
                w={{ base: "45%", md: "130px", lg: "130px" }}
              >
                <Text fontWeight="medium">Bedrooms</Text>
                <Select size="lg" w="100%" fontSize="lg">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </VStack>

              {/* Baths */}
              <VStack
                align="start"
                w={{ base: "45%", md: "130px", lg: "130px" }}
              >
                <Text fontWeight="medium">Baths</Text>
                <Select size="lg" w="100%" fontSize="lg">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </VStack>

              {/* Min Price */}
              <VStack
                align="start"
                w={{ base: "45%", md: "140px", lg: "140px" }}
              >
                <Text fontWeight="medium">Min Price</Text>
                <Input w="100%" variant="flushed" />
              </VStack>

              {/* Max Price */}
              <VStack
                align="start"
                w={{ base: "45%", md: "140px", lg: "140px" }}
              >
                <Text fontWeight="medium">Max Price</Text>
                <Input w="100%" variant="flushed" />
              </VStack>

              {/* Search Button */}
              <VStack
                align="start"
                w={{ base: "100%", md: "auto", lg: "auto" }}
                pt={{ base: 2, md: 0 }}
              >
                <Button
                  w={{ base: "100%", md: "140px", lg: "240px" }}
                  h={{ base: "50px", md: "50px", lg: "50px" }}
                  borderRadius="30px"
                  fontSize="lg"
                >
                  SEARCH NOW
                </Button>
              </VStack>
            </HStack>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          w={{ base: "100%", md: "35%" }}
          bg="#161616"
          p={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="'Cinzel', serif"
          mt={{ base: 6, md: 0 }} // add margin-top for stacked mobile/tablet
        >
          <VStack alignItems="center" justifyContent="center">
            <Text
              color="white"
              mb={4}
              textAlign="center"
              fontSize={{ base: 20, md: 25 }}
            >
              MARCI METZGER
            </Text>

            <Image
              src="/assets/marci.png"
              boxSize={{ base: "200px", md: "300px" }}
              objectFit="cover"
              borderRadius="full"
              alt="Marci Metzger"
            />

            <Text
              color="white"
              mb={4}
              textAlign="center"
              fontSize={{ base: 16, md: 20 }}
            >
              REALTOR FOR NEARLY 3 DECADES!
            </Text>

            <Text
              color="white"
              mb={0}
              textAlign="center"
              fontSize={{ base: 16, md: 20 }}
            >
              206-919-6886
            </Text>
          </VStack>
        </Box>
      </Flex>

      <Flex
        w="100%"
        h={{ base: "auto", md: "900px", lg: "900px" }}
        align="center"
        justify="center"
        position="relative"
        overflow="hidden"
      >
        <Text
          fontFamily="'Cinzel', serif"
          fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
          fontWeight="bold"
          position="absolute"
          top={{ base: "20px", md: "50px", lg: "50px" }}
          left="50%"
          transform="translateX(-50%)"
          color="#161616"
          zIndex={2}
          marginTop={9}
        >
          Photo Gallery
        </Text>

        {/* Smaller Photo Gallery Box */}
        <Box
          w={{ base: "95%", md: "80%", lg: "80%" }}
          h={{ base: "400px", md: "800px", lg: "800px" }}
          position="relative"
          margin="auto"
          overflow="hidden"
          mt={{ base: 6, md: 10, lg: 10 }}
          bg="#e8dfd2"
          borderRadius="md"
          role="group"
        >
          {/* Previous Button */}
          <IconButton
            icon={
              <ChevronLeftIcon color="black" boxSize={{ base: 5, md: 8 }} />
            }
            position="absolute"
            top="50%"
            left={{ base: "5px", md: "10px", lg: "10px" }}
            transform="translateY(-50%)"
            zIndex={5}
            onClick={() =>
              setCurrentPhoto(
                (prev) => (prev - 1 + photoList.length) % photoList.length
              )
            }
            aria-label="Previous Photo"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            opacity={0}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
          />

          {/* Next Button */}
          <IconButton
            icon={
              <ChevronRightIcon color="black" boxSize={{ base: 5, md: 8 }} />
            }
            position="absolute"
            top="50%"
            right={{ base: "5px", md: "10px", lg: "10px" }}
            transform="translateY(-50%)"
            zIndex={5}
            onClick={() =>
              setCurrentPhoto((prev) => (prev + 1) % photoList.length)
            }
            aria-label="Next Photo"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            opacity={0}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
          />

          <AnimatePresence initial={false}>
            {photoList.map((photo, idx) => {
              let position = idx - currentPhoto;
              const half = Math.floor(photoList.length / 2);

              if (position < -half) position += photoList.length;
              if (position > half) position -= photoList.length;

              return (
                <MotionBox
                  key={idx}
                  position="absolute"
                  top={{ base: "5%", md: "20%", lg: "20%" }}
                  left={{ base: "5%", md: "10%", lg: "25%" }}
                  w={{ base: "90%", md: "500px", lg: "800px" }}
                  h={{ base: "250px", md: "530px", lg: "530px" }}
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                  bg="white"
                  cursor="default"
                  zIndex={position === 0 ? 2 : 1}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: Math.abs(position) > 1 ? 0 : 1,
                    scale: position === 0 ? 1 : 0.8,
                    x: getX(position),
                    rotateY: position * 20,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Box
                    w="100%"
                    h={{ base: "360px", md: "500px", lg: "500px" }}
                    p={{ base: 2, md: 4, lg: 4 }}
                    overflow="hidden"
                    borderRadius="md"
                  >
                    <Image
                      src={photo}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      alt="gallery"
                    />
                  </Box>
                </MotionBox>
              );
            })}
          </AnimatePresence>
        </Box>
      </Flex>

      <Flex
        w="100%"
        h={{ base: "auto", md: "550px", lg: "550px" }}
        align="center"
        justify="center"
        p={{ base: 6, md: 36, lg: 36 }}
      >
        <VStack spacing={{ base: 10, md: 10, lg: 10 }}>
          <Text
            fontFamily="'Cinzel', serif"
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
            marginTop={{ base: 8, md: 20, lg: 20 }}
            marginBottom={{ base: 6, md: 10, lg: 10 }}
            textAlign="center"
          >
            OUR SERVICES
          </Text>

          <HStack
            spacing={{ base: 0, md: 0 }}
            justify="center"
            align="center"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <VStack
              spacing={{ base: 4, md: 4, lg: 4 }}
              align="center"
              w={{ base: "90%", md: "auto", lg: "auto" }}
            >
              <Image
                src="assets/services1.png"
                alt="services1logo"
                boxSize={{ base: "120px", md: "auto" }}
              />
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                textAlign="center"
              >
                Real Estate Done Right
              </Text>
              <Text
                fontSize={{ base: "sm", md: "lg", lg: "lg" }}
                textAlign="center"
                fontFamily="'Source Sans Pro', sans-serif"
                mx={{ base: 4, md: 20, lg: 20 }}
              >
                Nervous about your property adventure? Don&apos;t be. Whether
                you&apos;re getting ready to buy or sell your residence, looking
                at investment properties, or just curious about the markets, our
                team ensures you get the best experience possible!
              </Text>
            </VStack>

            <VStack
              spacing={{ base: 4, md: 4, lg: 4 }}
              align="center"
              w={{ base: "90%", md: "auto", lg: "auto" }}
            >
              <Image
                src="assets/services2.png"
                alt="services2logo"
                boxSize={{ base: "120px", md: "auto" }}
              />
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                textAlign="center"
              >
                Commercial & Residential
              </Text>
              <Text
                fontSize={{ base: "sm", md: "lg", lg: "lg" }}
                textAlign="center"
                fontFamily="'Source Sans Pro', sans-serif"
                mx={{ base: 4, md: 20, lg: 20 }}
              >
                Large or small, condo or mansion, we can find it and get at the
                price that&apos;s right. Fixer-uppers? Luxury? We can help with
                all of it! We live, work, and play in this community. Happy to
                help you find where to put you hard-earned dollars.
              </Text>
            </VStack>

            <VStack
              spacing={{ base: 4, md: 4, lg: 4 }}
              align="center"
              w={{ base: "90%", md: "auto", lg: "auto" }}
            >
              <Image
                src="assets/services3.png"
                alt="services3logo"
                boxSize={{ base: "120px", md: "auto" }}
              />
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                textAlign="center"
              >
                Rely on Expertise
              </Text>
              <Text
                fontSize={{ base: "sm", md: "lg", lg: "lg" }}
                textAlign="center"
                fontFamily="'Source Sans Pro', sans-serif"
                mx={{ base: 4, md: 20, lg: 20 }}
              >
                If you have questions about affordability, credit, and loan
                options, trust us to connect you with the right people to get
                the answers you need in a timely fashion. We make sure you feel
                confident and educated every step of the way.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        align="center"
        justify={{ base: "center", md: "space-around", lg: "space-evenly" }}
        mt={{ base: 10, md: 20, lg: 48 }}
        gap={{ base: 6, md: 10, lg: 0 }}
      >
        <HStack w={{ base: "80%", md: "auto", lg: "auto" }} justify="center">
          <Image
            src="assets/legal1.png"
            alt="logo1"
            boxSize={{ base: "80px", md: "100px", lg: "120px" }}
          />
        </HStack>
        <HStack w={{ base: "80%", md: "auto", lg: "auto" }} justify="center">
          <Image
            src="assets/legal2.png"
            alt="logo2"
            boxSize={{ base: "80px", md: "100px", lg: "120px" }}
          />
        </HStack>
        <HStack w={{ base: "80%", md: "auto", lg: "auto" }} justify="center">
          <Image
            src="assets/legal3.png"
            alt="logo3"
            boxSize={{ base: "80px", md: "100px", lg: "120px" }}
          />
        </HStack>
        <HStack w={{ base: "80%", md: "auto", lg: "auto" }} justify="center">
          <Image
            src="assets/legal4.png"
            alt="logo4"
            boxSize={{ base: "80px", md: "100px", lg: "120px" }}
          />
        </HStack>
      </Flex>

      <Flex
        w="100%"
        h={{ base: "auto", md: "600px", lg: "600px" }}
        align="center"
        justify="center"
        p={{ base: 4, md: 10, lg: 10 }}
      >
        <Box
          w={{ base: "95%", md: "80%", lg: "80%" }}
          h="100%"
          p={{ base: 4, md: 10, lg: 10 }}
        >
          <VStack w="100%" spacing={{ base: 6, md: 8, lg: 8 }} align="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
              fontWeight="bold"
              fontFamily="'Cinzel', serif"
              textAlign="center"
            >
              CALL OR VISIT
            </Text>

            {/* Main content: Form + Contact Info */}
            <Stack
              direction={{ base: "column", md: "row", lg: "row" }}
              w="100%"
              spacing={{ base: 8, md: 12, lg: 12 }}
              align={{ base: "center", md: "start", lg: "start" }}
              justify="space-between"
            >
              {/* Form Section */}
              <VStack
                w={{ base: "100%", md: "50%", lg: "50%" }}
                spacing={6}
                align="stretch"
                p={5}
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                  fontWeight="medium"
                  textAlign="left"
                  fontFamily="'Source Sans Pro', sans-serif"
                >
                  Send Message
                </Text>

                <Box position="relative" w="full">
                  <Input
                    className="peer"
                    placeholder=" "
                    size="md"
                    variant="flushed"
                  />
                  <Label fontFamily="'Source Sans Pro', sans-serif">Name</Label>
                </Box>

                <Box position="relative" w="full">
                  <Input
                    className="peer"
                    placeholder=" "
                    size="md"
                    variant="flushed"
                  />
                  <Label fontFamily="'Source Sans Pro', sans-serif">
                    Email
                  </Label>
                </Box>

                <Box position="relative" w="full">
                  <Textarea
                    className="peer"
                    placeholder=" "
                    size="md"
                    variant="flushed"
                  />
                  <Label fontFamily="'Source Sans Pro', sans-serif">
                    Message
                  </Label>
                </Box>

                <Button
                  w={{ base: "120px", md: "150px", lg: "150px" }}
                  h={{ base: "50px", md: "60px", lg: "60px" }}
                  borderRadius="30px"
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  alignSelf="center"
                  fontFamily="'Source Sans Pro', sans-serif"
                >
                  SEND
                </Button>

                <Text
                  fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                  textAlign="center"
                >
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </Text>
              </VStack>

              {/* Contact Info Section */}
              <VStack
                w={{ base: "100%", md: "50%", lg: "50%" }}
                spacing={6}
                align={{ base: "center", md: "start", lg: "start" }}
                p={5}
              >
                <VStack
                  align={{ base: "center", md: "start", lg: "start" }}
                  spacing={6}
                >
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                    fontFamily="'Cinzel', serif"
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    Marci Metzger - THE RIDGE REALTY GROUP
                  </Text>
                  <Text
                    fontFamily="'Source Sans Pro', sans-serif"
                    fontSize={{ base: "sm", md: "xl", lg: "xl" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                  </Text>
                  <Text
                    fontFamily="'Source Sans Pro', sans-serif"
                    fontSize={{ base: "sm", md: "xl", lg: "xl" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    (206) 919-6886
                  </Text>
                </VStack>

                <VStack align={{ base: "center", md: "start", lg: "start" }}>
                  <Text
                    fontWeight="bold"
                    fontFamily="'Cinzel', serif"
                    fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    Office Hours
                  </Text>
                  <Text
                    fontFamily="'Source Sans Pro', sans-serif"
                    fontSize={{ base: "sm", md: "xl", lg: "xl" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    Open daily 8:00 am - 7:00 pm
                  </Text>
                  <Text
                    fontFamily="'Source Sans Pro', sans-serif'"
                    fontSize={{ base: "sm", md: "xl", lg: "xl" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                  >
                    Appointments outside office hours available upon request.
                    Just call!
                  </Text>
                </VStack>
              </VStack>
            </Stack>
          </VStack>
        </Box>
      </Flex>

      <Footer />
    </PageLayout>
  );
}

export default Index;
