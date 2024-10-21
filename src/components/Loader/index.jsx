import React from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Center h="100vh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
      </motion.div>
    </Center>
  );
};

export default Loader;
