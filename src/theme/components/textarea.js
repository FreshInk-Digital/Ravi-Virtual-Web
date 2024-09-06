import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  xs: defineStyle({
    h: "206px",
    fontSize: "16px",
    p: "14px",
  }),
};

const variants = {
  tarSecondary: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_100: {
        bg: "gray.100",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_100"];
  }),
};

const TextArea = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "tarSecondary",
    size: "xs",
  },
});
export default TextArea;