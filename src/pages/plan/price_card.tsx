import {
  Box,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FirstColor } from "../../constants";
import { PriceWrapper } from "./pricing";
import { TopChip } from "./topchip";

type Props = {
  cardTitle: string;
  fee: number;
  checkList: any;
  isShowChip?: boolean;
  isGold?: boolean;
};

export const PriceCard: FC<Props> = (props) => {
  const { isShowChip, cardTitle, fee, checkList } = props;
  return (
    <PriceWrapper>
      <Box position="relative">
        {isShowChip && <TopChip />}
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            {cardTitle}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              $
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              {fee}
            </Text>
            <Text fontSize="3xl" color="gray.500">
              /month
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <List spacing={3} textAlign="start" px={12}>
            {checkList &&
              checkList.map((item: any) => {
                return (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={FirstColor} />
                    {item}
                  </ListItem>
                );
              })}
          </List>
          <Box w="80%" pt={7}>
            <Button
              w="full"
              bg={useColorModeValue(
                props.isGold ? "#ead090" : undefined,
                "#ead090"
              )}
              _hover={{ bgColor: props.isGold ? FirstColor : FirstColor }}
            >
              Start trial
            </Button>
          </Box>
        </VStack>
      </Box>
    </PriceWrapper>
  );
};
