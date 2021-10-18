import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#EDF2F7", 
    200: "#90CDF4",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#2B6CB0",
    700: "#2C5282",
    800: "#2A4365",
    900: "#1A365D"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
