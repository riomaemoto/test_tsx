import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FirstColor } from "../../constants";

export const TopChip = () => {
  return (
    <Box
      position="absolute"
      top="-16px"
      left="50%"
      sx={{
        transform: "translate(-50%)",
      }}
    >
      <Text
        textTransform="uppercase"
        bg={FirstColor}
        px={3}
        py={1}
        color={useColorModeValue("gray.900", "gray.300")}
        fontSize="sm"
        fontWeight="600"
        rounded="xl"
      >
        Most Popular
      </Text>
    </Box>
  );
};
