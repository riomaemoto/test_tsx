import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceCard } from "./price_card";
import { firstArr, secondArr, thirdArr } from "../../constants";
import { FC } from "react";

type props = {
  children: any;
};

export const PriceWrapper: FC<props> = ({ children }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
};

export const Pricing = () => {
  return (
    <Box py={32}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceCard cardTitle={"FREE trial"} fee={0} checkList={firstArr} />
        <PriceCard
          cardTitle={"Gold Plan"}
          fee={299}
          isShowChip={true}
          checkList={secondArr}
          isGold={true}
        />
        <PriceCard cardTitle={"Premium Plan"} fee={399} checkList={thirdArr} />
      </Stack>
    </Box>
  );
};
