import { Image, Flex, Box } from "@chakra-ui/react";
import React from "react";

export default function NoiseFxBannerSection() {
  return (
    <>
      {/* noise fx banner section */}
      <Box alignSelf="stretch">
          <Box
            h={{ md: "116px", base: "auto" }}
            Image="url(/images/img_top_most_banner.png)"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            <Flex overflowX="scroll" flexDirection={{ md: "row", base: "column" }}>
              <Image
                src="images/img_noisefx_1080_1_364x412.png"
                alt="Noise Image One"
                h="364px"
                opacity={0.6}
                w={{ md: "412px", base: "100%"}}
                fit="cover"
              />
              <Image
                src="images/img_noisefx_1080_2_364x616.png"
                alt="Noise Image Two"
                h="364px"
                opacity={0.6}
                w={{ md: "616px", base: "100%" }}
                fit="cover"
              />
              <Image
                src="images/img_noisefx_1080_3_364x412.png"
                alt="Noise Image Three"
                h="364px"
                opacity={0.6}
                w={{ md: "412px", base: "100%" }}
                fit="cover"
              />
            </Flex>
          </Box>
        </Box>
    </>
  );
}