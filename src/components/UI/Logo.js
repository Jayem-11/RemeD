import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <img src="https://cdn.pixabay.com/photo/2017/08/19/11/36/heart-2658206__340.png" alt=''></img>
      </Text>
    </Box>
  );
}