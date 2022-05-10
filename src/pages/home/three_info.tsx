import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoFitness, IoSearchSharp } from "react-icons/io5";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text w={400} color={"gray.700"}>
        {text}
      </Text>
    </Stack>
  );
};

export const ThreeInfo = () => {
  return (
    <Box p={20} ml={{ base: 2, md: 20 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        <Feature
          icon={<Icon as={IoAnalyticsSharp} color={"pink.500"} w={10} h={10} />}
          title={"Lifetime Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={IoFitness} color={"pink.500"} w={10} h={10} />}
          title={"Unlimited Donations"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={IoSearchSharp} color={"pink.500"} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
};
