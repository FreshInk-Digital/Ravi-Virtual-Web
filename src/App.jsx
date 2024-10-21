import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import ProjectRoutes from "./Routes";
import Loader from "../src/components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage the loading screen

  // Check if the loader has already been shown
  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (!hasLoadedBefore) {
      // Simulate loading for the initial page load
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after timeout
        localStorage.setItem("hasLoadedBefore", "true"); // Mark that loader has been shown
      }, 2000); // Adjust the timeout duration as needed

      return () => clearTimeout(timer); // Cleanup on component unmount
    } else {
      setIsLoading(false); // Skip the loader if it has already been shown
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Loader />  
      ) : (
        <Router>
          <ProjectRoutes /> {/* Directly render routes after initial load */}
        </Router>
      )}
    </ChakraProvider>
  );
}

export default App;
