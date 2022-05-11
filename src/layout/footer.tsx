import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { AllDays, Days, TimeList } from "../constants";

type Props = {
  text: string;
  icon: ReactNode;
  iconBg: string;
};

type listHeader = {
  children: ReactNode;
};

const Feature: FC<Props> = ({ text, icon, iconBg }) => {
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

const ListHeader: FC<listHeader> = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer: FC = () => {
  return (
    <Box bg={"gray.100"} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text ml={{ base: "75px", md: "20px" }}>
              <ListHeader>Open Hours</ListHeader>
              <Box
                style={{
                  marginTop: "12px",
                  display: "flex",
                  lineHeight: "30px",
                }}
              >
                <Text style={{ listStyle: "none", marginRight: "5px" }}>
                  <AllDays aaa={Days} />
                </Text>
                <Text style={{ listStyle: "none" }}>
                  <TimeList />
                </Text>
              </Box>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "75px", md: "20px" }}
              lineHeight={{ base: "8", md: "40px" }}
            >
              <ListHeader>Contact</ListHeader>
              <Text>Phone Number </Text>
              <Text>0120-117-5963</Text>
              <Text>Email Adress </Text>
              <Text> 2TheNextStage@gmail.com</Text>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "75px", md: "20px" }}
              lineHeight={{ base: "8", md: "40px" }}
            >
              <ListHeader>Legal</ListHeader>
              <Text cursor={"pointer"}>Cookies Policy</Text>
              <Text cursor={"pointer"}>Privacy Policy</Text>
              <Text cursor={"pointer"}>Terms of Service</Text>
              <Text cursor={"pointer"}>Law Enforcement</Text>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text
              ml={{ base: "75px", md: "20px" }}
              lineHeight={{ base: "8", md: "60px" }}
            >
              <ListHeader>Social Media</ListHeader>
              <Box>
                <Link>
                  <Feature
                    icon={
                      <Icon
                        as={IoLogoInstagram}
                        color={"#ead070"}
                        w={7}
                        h={7}
                      />
                    }
                    iconBg={""}
                    text={"@2TheNextStage"}
                  />
                </Link>
              </Box>
              <Link>
                <Box cursor={"pointer"}>
                  <Feature
                    icon={
                      <Icon as={IoLogoFacebook} color={"#ead070"} w={7} h={7} />
                    }
                    iconBg={""}
                    text={"@2TheNextStage"}
                  />
                </Box>
              </Link>
              <Link>
                <Box cursor={"pointer"}>
                  <Feature
                    icon={
                      <Icon as={IoLogoTwitter} color={"#ead070"} w={7} h={7} />
                    }
                    iconBg={""}
                    text={"@2TheNextStage"}
                  />
                </Box>
              </Link>
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container py={4} direction={{ base: "column", md: "row" }}>
          <Text>
            <Text align={"center"}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
