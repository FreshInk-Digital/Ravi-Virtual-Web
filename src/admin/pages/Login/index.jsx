import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LoginSection from "./LoginSection";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login Ravi Ariv</title>
        <meta 
          name="description"
          content="Learn more about Ravi Ariv's commitment to Tax Advisory services and our journey of over two decades in this industry area. Explore our mission and vision for the future."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Header />

        {/* login section */}
        <LoginSection route="api/token/" method="login" />
       
        <Footer mt="0px" />
      </Box>
    </>
  );
}