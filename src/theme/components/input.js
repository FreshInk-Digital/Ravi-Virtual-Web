import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text" } });

const sizes = {
  sm: defineStyle({
    field: {
      fontSize: "16px",
      px: "12px",
      height: "44px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "16px",
      px: "14px",
      height: "50px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "12px",
      height: "38px", 
      px: "20px", 
    },
  }),
  lg: defineStyle({
    field: {
      fontSize: "14px",
      px: "24px",
      height: "72px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        field: {
          bg: "white.a700",
          boxShadow: "xs",
        },
      },
      gray_100: {
        field: {
          bg: "gray.100",
          color: "black.900_7f",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_100"];
  }),
};
  
const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "lg",
  },
});
export default Input;