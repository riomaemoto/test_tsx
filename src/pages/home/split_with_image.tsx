import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoAnalyticsSharp, IoFitness, IoSearchSharp } from "react-icons/io5";

import { machine } from "../../constants";

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
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"purple.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("purple.50", "purple.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          {/* <Heading>2TheNextStage</Heading> */}
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
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"pink.500"} w={5} h={5} />
              }
              // iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Set your body Goals "}
            />
            <Feature
              icon={<Icon as={IoFitness} color={"pink.500"} w={5} h={5} />}
              // iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Put in work"}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={"pink.500"} w={5} h={5} />}
              // iconBg={useColorModeValue("purple.100", "purple.900")}
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
