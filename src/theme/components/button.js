import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  sm: defineStyle({
    h: "28px",
    fontSize: "16px",
    px: "8px",
  }),
  xl: defineStyle({
    h: "48px",
    fontSize: "16px",
    px: "20px",
  }),
  md: defineStyle({
    h: "40px",
    fontSize: "14px",
    px: "16px",
  }),
  xs: defineStyle({
    h: "20px",
    px: "2px",
  }),
  "2xl": defineStyle({
    h: "56px",
    fontSize: "16px",
    px: "34px",
  }),
  lg: defineStyle({
    h: "40px",
    px: "10px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.a700",
        boxShadow: "xs",
        color: "light_blue.a700",
      },
      light_blue_A700: {
        bg: "light_blue.a700",
        color: "gray.50",
      },
      gray_50_01: {
        bg: "gray.50_01",
        boxShadow: "xs",
        color: "gray.900_01",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["light_blue_A700"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "lg",
  },
});
export default Button;