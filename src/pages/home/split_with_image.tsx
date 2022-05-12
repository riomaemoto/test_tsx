import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoAnalyticsSharp, IoFitness, IoSearchSharp } from "react-icons/io5";

import { FirstColor, machine, SecondColor } from "../../constants";

interface FeatureProps {
  text: string;
  iconBg?: string;
  icon?: ReactElement;
}

export const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const SplitWithImage = () => {
  return (
    <Container maxW={"5xl"} py={12} mt={{ base: 15, md: 45 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"black"}
            fontWeight={600}
            fontSize={"sm"}
            bg={SecondColor}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Text
            fontSize={"30px"}
            fontWeight={"bold"}
            align={{ base: "center", md: "start" }}
          >
            VR × PEMF × Workout
          </Text>
          <Text color={"gray.700"} fontSize={"lg"}>
            We use plse electro-magnetic field (PEMF) machines to approach the
            muscles and cells deep down inside our body that even EMS machines
            con not reach. This allows us to get the best results.
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={"gray.300"} />}
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={FirstColor} w={7} h={7} />
              }
              text={"Set your body Goals "}
            />
            <Feature
              icon={<Icon as={IoFitness} color={FirstColor} w={7} h={7} />}
              text={"Put in work"}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={FirstColor} w={7} h={7} />}
              text={"Check your results"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={machine}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
