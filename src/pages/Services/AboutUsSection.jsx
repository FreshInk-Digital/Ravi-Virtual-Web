import { Slider } from "../../components";
import { Box, Flex, Circle } from "@chakra-ui/react";
import React from "react";

export default function AboutUsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* about us section */}
      <Box
        h={{ md: "300px", base: "auto" }} // Reduced height
        mt="68px"
        position="relative"
        alignContent="center"
      >
        <Box
          className="AboutUsSlider"
          w="100%"
          display="flex"
          maxW="1184px"
          px={{ md: "4px", base: "20px" }}
          mx="auto"
        >
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              551: { items: 1 },
              1051: { items: 1 },
            }}
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
              ) : (
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
            items={[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <Flex
                  h={{ md: "300px", base: "auto" }} // Reduced height
                  bg="black.900"
                  bgImage="url(/images/img_frame_560_860x1172.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  justifyContent="center"  // Align items horizontally at the center
                  alignItems="center"       // Align items vertically at the center
                  p={{ md: "44px", base: "20px" }}
                >
                  {/* Additional content can go here */}
                </Flex>
              </React.Fragment>
            ))}
          />
        </Box>
      </Box>
    </>
  );
}
