import { Slider } from "../../components";
import { Box, Flex, Circle } from "@chakra-ui/react";
import React from "react";

export default function AboutUsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* about us section */}
      <Box h={{ md: "368px", base: "auto" }} position="relative" alignContent="center">
        <Box className=" AboutUsSlider" w="100%" display="flex" maxW="1184px" mx="auto" px={{ md: 0, base: "20px" }}>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1}, 551: { items: 1}, 1051: { items: 1} }}
            renderDotsItem={(props) => {
              return props?.isActive ? (
                <Circle
                  size="14px"
                  borderColor="white.a700"
                  borderWidth="2px"
                  borderStyle="solid"
                  display="inline-block"
                  cursor="pointer"
                  borderRadius="50%"
                  mr="5px"
                />
              ):(
                <Circle
                  size="12px"
                  bg="white.a700_7f"
                  display="inline-block"
                  cursor="pointer"
                  borderRadius="50%"
                  mr="5px"
                />
              );
            }}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <Flex
                  h={{ md: "368px", base: "auto" }}
                  bg="black.900"
                  bgImage="url(/images/img_frame_560.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  alignItems="end"
                  p={{ base: "20px", sm: "34px" }}
                >
                  <Flex mt="234px" w={{ md: "94%", base: "100%" }} justifyContent="center">
                    {/* <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank" rel="noreferrer">
                      <Flex mb="34px" gap="9px" w="100%" alignItems="center">
                        <Flex gap="4px" w="8%" flexDirection="column" alignItems="start">
                          <Text size="textmd" color="gray.50" fontFamily="Poppins" fontWeight={500}>
                            About Us
                          </Text>
                          <Box h="1px" bg="gray.50" alignSelf="stretch" w="100%" />
                        </Flex>
                        <Image src="/images/img_arrow_right.svg" alt="Arrow Image" h="24px" alignSelf="start" w="24px" />
                      </Flex>
                    </a> */}
                  </Flex>
                </Flex>
              </React.Fragment>
            ))}
          />
        </Box>
      </Box>
    </>
  );
}