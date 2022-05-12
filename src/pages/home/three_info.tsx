import { ReactNode } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoFitness, IoSearchSharp } from "react-icons/io5";
import { FirstColor } from "../../constants";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        ml={10}
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={FirstColor}
        mb={1}
      >
        {icon}
      </Flex>
      <Text pl={10} fontWeight={600}>
        {title}
      </Text>
      <Text pl={10} w={{ base: 300, md: "fit-content" }} color={"gray.700"}>
        {text}
      </Text>
    </Stack>
  );
};

export const ThreeInfo = () => {
  return (
    <Box p={10} pl={{ base: 2, md: 20 }} my={30}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        <Feature
          icon={<Icon as={IoAnalyticsSharp} color={"#fff"} w={10} h={10} />}
          title={"Lifetime Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={IoFitness} color={"#fff"} w={10} h={10} />}
          title={"Unlimited Donations"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={IoSearchSharp} color={"#fff"} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
};
