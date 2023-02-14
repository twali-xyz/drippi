import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "extended-theme",
};

export const theme = extendTheme({
  // the palatte of colors is possibly to large. Reducing the number of colors could make the themes easier to interchange
  config,
  colors: {
    primary: "#FAFF73",
    secondary: "#974A27",
  },
  // choose a few font sizes and use them throughout the app. This will make it easier to change the font size between themes
  fontSizes: {
    xs: "0.8rem",
    sm: "1rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "2.75rem",
    xxl: "3.2rem",
    xxxl: "4.8rem",
  },
  fonts: {},
  borderRadius: {
    xs: "0.8rem",
    sm: "2.75rem",
    md: "40rem",
    lg: "",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("white", "rgb(30, 30, 30)")(props),
        color: mode("rgb(0, 0, 0)", "rgb(255, 255, 255)")(props),
      },
    }),
  },

  // custom component styles
  components: {},
});
