import { Input, Text, Heading, Button, Textarea, Container } from "./components";
import { colors, shadows, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "550px",
    md: "1050px",
    lg: "1440px",
  },
  colors,
  shadows,
  fonts,
  components: { Input, Text, Heading, Button, Textarea, Container },
});
export default theme;