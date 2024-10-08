import { Slider } from "../../components";
import { Box, Flex, Circle } from "@chakra-ui/react";
import React from "react";

export default function AboutUsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* About Us section */}
      <Box h={{ md: "368px", base: "auto" }} position="relative" alignContent="center">
        <Box className="AboutUsSlider" w="100%" display="flex" maxW="1184px" mx="auto" px={{ md: 0, base: "20px" }}>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
            renderDotsItem={(props) => (
              <Circle
                size={props?.isActive ? "14px" : "12px"}
                borderColor={props?.isActive ? "white.a700" : "white.a700_7f"}
                borderWidth="2px"
                borderStyle="solid"
                display="inline-block"
                cursor="pointer"
                borderRadius="50%"
                mr="5px"
                bg={!props?.isActive ? "white.a700_7f" : "transparent"}
              />
            )}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map((_, index) => (
              <Flex
                key={index}
                h={{ md: "368px", base: "auto" }}
                bg="black.900"
                bgImage="url(/images/img_frame_560.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
                alignItems="center" // Center items vertically
                justifyContent="center" // Center content horizontally
                p={{ base: "20px", sm: "34px" }}
              >
                <Flex
                  direction="column" // Set direction to column to stack items vertically
                  alignItems="center" // Center items in the column
                  textAlign="center" // Center text alignment
                  w="full" // Use full width
                >
                  {/* Additional content can go here */}
                </Flex>
              </Flex>
            ))}
          />
        </Box>
      </Box>
    </>
  );
}
