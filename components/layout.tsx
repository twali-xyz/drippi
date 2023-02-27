// components/layout.js

import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import NavBar from "./navBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Box fontFamily={"normal"}>{children}</Box>
      <Footer />
    </>
  );
}
