import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { motion, AnimatePresence } from "framer-motion";
import ProjectRoutes from "./Routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <PageTransitions>
          <ProjectRoutes />
        </PageTransitions>
      </Router>
    </ChakraProvider>
  );
}

// PageTransitions component to handle animations
function PageTransitions({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} // Adjust the duration as needed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
