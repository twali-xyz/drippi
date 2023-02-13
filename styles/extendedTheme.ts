import { mode } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "extended-theme",
};

export const theme = extendTheme({
  // the palatte of colors is possibly to large. Reducing the number of colors could make the themes easier to interchange
  config,
  colors: {},
  // choose a few font sizes and use them throughout the app. This will make it easier to change the font size between themes
  fontSizes: {},
  fonts: {},
  borderRadius: {
    sm: "",
    md: "",
    lg: "",
    xl: "",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "rgb(30, 30, 30)")(props),
        color: mode("rgb(0, 0, 0)", "rgb(255, 255, 255)")(props),
      },
    }),
  },

  // custom component styles
  components: {},
});
